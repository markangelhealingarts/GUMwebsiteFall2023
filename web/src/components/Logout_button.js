import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Logout_button = () => {
  const navigate = useNavigate(); // Initialize the hook
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      // Handle errors (e.g., display an error message)
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout_button;
