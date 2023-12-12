import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  let currentTimer = useRef(null);
  const [currentTimerSession, setCurrentTimerSession] = useState(0);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        const userRef = doc(db, "Users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const userLevel = userData.level;

          // Get the current time
          const now = new Date();
          const currentTime = now.getHours() * 60 + now.getMinutes();

          // Find the next timer time
          let nextTimerTime = userData.timers.find(time => {
            const [hours, minutes] = time.split(':').map(Number);
            return (hours * 60 + minutes) > currentTime;
          });

          // If no timer is found, use the first timer of the next day
          if (!nextTimerTime) {
            nextTimerTime = userData.timers[0];
            setCurrentTimerSession(0); // Reset the timer session
          } else {
            // Set the current timer session to the found timer
            setCurrentTimerSession(userData.timers.indexOf(nextTimerTime));
          }

          // Start the timer
          if (nextTimerTime) {
            currentTimer.current = new Timer(nextTimerTime, () => {
              setCurrentTimerSession((prev) => (prev >= userData.timers.length - 1) ? 0 : prev + 1);
              alert(`Hey ${auth.currentUser.displayName}, it's time to Get Up and Move!`);
              navigate(`/video/${userLevel}/${currentTimerSession + 1}`);
            });
            currentTimer.current.start();
          }
        }
      }
    });

    return () => {
      unsubscribe();
      if (currentTimer.current) {
        currentTimer.current.stop();
      }
    };
  }, [currentTimerSession, navigate]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};