import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Button from './Button';

const LogoutButton = () => {
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
    <Button label={'Logout'} onClick={handleLogout}></Button>
  );
};

export default LogoutButton;
