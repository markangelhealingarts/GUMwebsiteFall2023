import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SignupContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the hook

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError('');
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Initialize user variables in Firestore
      await setDoc(doc(db, "Users", user.uid), {
        username: username,
        level: 1,
        points: 0,
        timers: [
          "09:00",
          "10:00",
          "11:00",
          "14:00",
          "15:00",
          "16:00"
        ]
      });

      // Handle successful signup (e.g., redirect to a protected page)
      navigate('/');
    } catch (error) {
      setError(error.message);
      // Handle errors (e.g., unable to create account)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSignUp} className="space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold p-2 rounded-lg">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );  
};

export default SignupContent;
