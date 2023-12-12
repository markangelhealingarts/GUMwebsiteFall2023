import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { deleteUser } from 'firebase/auth'; // Import deleteUser
import { doc, deleteDoc } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../firebase'; // Import Firestore instance
import Button from './Button';

const DeleteAccountButton = () => {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    // Confirm deletion
    const confirmDeletion = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');

    if (confirmDeletion) {
      try {
        // Delete user data from the 'Users' collection
        const userDocRef = doc(db, 'Users', auth.currentUser.uid);
        await deleteDoc(userDocRef);

        // Delete the user account
        await deleteUser(auth.currentUser);

        // Redirect to the home page or login page after account deletion
        navigate('/');
      } catch (error) {
        // Handle errors (e.g., display an error message)
        console.error('Error deleting account:', error);
      }
    }
  };

  return (
    <Button label={'Delete Account'} onClick={handleDeleteAccount} additionalClasses='bg-red-400 hover:bg-red-500'></Button>
  );
};

export default DeleteAccountButton;
