import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Button from './Button';

const UserSchedule = () => {
  const { currentUser } = useAuth();
  const [schedule, setSchedule] = useState(Array(6).fill(''));

  useEffect(() => {
    const fetchUserSchedule = async () => {
      if (currentUser) {
        const userRef = doc(db, 'Users', currentUser.uid);
        try {
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setSchedule(userData.timers || Array(6).fill(''));
          }
        } catch (error) {
          console.error('Error fetching user schedule:', error);
        }
      }
    };

    fetchUserSchedule();
  }, [currentUser]);

  const handleTimeChange = (index, newTime) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index] = newTime;
    setSchedule(updatedSchedule);
  };

  // This funciton coudl use refining to make a more strict schedule
  const isScheduleValid = (schedule) => {
    let outOfOrderCount = 0;
  
    for (let i = 1; i < schedule.length; i++) {
      const prevTime = new Date('1970-01-01T' + schedule[i - 1]);
      const currentTime = new Date('1970-01-01T' + schedule[i]);
      const timeDiffHours = (currentTime - prevTime) / (1000 * 60 * 60);
  
      // Check for wrap-around midnight
      if (currentTime < prevTime) {
        outOfOrderCount += 1;
        if (outOfOrderCount > 1) {
          return false; // More than one out-of-order instance
        }
        // For wrap-around midnight, calculate time difference accordingly
        const adjustedTimeDiffHours = ((24 * 60 * 60 * 1000) - (prevTime - currentTime)) / (1000 * 60 * 60);
        if (adjustedTimeDiffHours > 3 || adjustedTimeDiffHours < 1) {
          return false; // Not within 1 to 3 hours for wrap-around scenario
        }
      }
      else {
        if (timeDiffHours > 3 || timeDiffHours < 1) {
          return false; // Time difference not within 1 to 3 hours
        }
      }
    }
  
    return true; // Schedule is valid
  };
  

  const saveSchedule = async () => {
    if (!isScheduleValid(schedule)) {
      alert('Schedule times are not valid.');
      return;
    }
    if (currentUser) {
      const userRef = doc(db, 'Users', currentUser.uid);
      try {
        await updateDoc(userRef, { timers: schedule });
        console.log('Schedule updated');
      } catch (error) {
        console.error('Error updating schedule:', error);
      }
    }
  };

  return (
    <div className='flex flex-col items-center p-2'>
      <h1>Activity Schedule</h1>
      {schedule.map((time, index) => (
        <div key={index}>
          <label>Session {index + 1}: </label>
          <input
            type="time"
            value={time}
            onChange={(e) => handleTimeChange(index, e.target.value)}
          />
        </div>
      ))}
      <Button label={'Save Schedule'} onClick={saveSchedule} additionalClasses='w-full'></Button>
    </div>
  );
};

export default UserSchedule;
