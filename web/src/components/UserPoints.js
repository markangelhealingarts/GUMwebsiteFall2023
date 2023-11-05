import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";

const UserPoints = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userRef = doc(db, "Users", currentUser.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          // Handle case where document doesn't exist
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <h1>Your Points: {userData ? userData.points : 0}</h1>
  );
};

export default UserPoints;