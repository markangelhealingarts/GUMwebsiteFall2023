import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';

const UserLevelSelect = () => {
  const { currentUser } = useAuth();
  const [userLevel, setUserLevel] = useState('');

  useEffect(() => {
    // Fetch the user's level from their profile and set it in state
    if (currentUser && currentUser.level) {
      setUserLevel(currentUser.level.toString());
    }
  }, [currentUser]);

  const handleLevelChange = async (event) => {
    const newLevel = event.target.value;
    setUserLevel(newLevel);

    if (currentUser) {
      const userRef = doc(db, 'Users', currentUser.uid);
      try {
        await updateDoc(userRef, { level: parseInt(newLevel, 10) });
        console.log('User level updated');
      } catch (error) {
        console.error('Error updating user level:', error);
      }
    }
  };

  return (
    <select value={userLevel} onChange={handleLevelChange}>
      <option value="1">Easy</option>
      <option value="2">Moderate</option>
      <option value="3">Vigorous</option>
    </select>
  );
};

export default UserLevelSelect;
