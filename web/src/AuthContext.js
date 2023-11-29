import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  let currentTimer = null;
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
          const nextTimerTime = userData.timers[currentTimerSession];
          if (nextTimerTime) {
            currentTimer = new Timer(nextTimerTime, () => {
              console.log("Timer expired!")
              setCurrentTimerSession((prev) => (prev >= 5) ?  0 : prev + 1); // Update the session for the next timer
              alert(`Hey ${userData.username}, it's time to Get Up and Move!`);
              navigate(`/video/${userLevel}/${currentTimerSession + 1}`);
            });
            currentTimer.start();
          }
        }
      }
    });

    return () => unsubscribe();
  }, [currentTimerSession, navigate]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
