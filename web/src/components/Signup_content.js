import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Signup_content = () => {
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
        points: 0,
      });

      // Handle successful signup (e.g., redirect to a protected page)
      navigate('/');
    } catch (error) {
      setError(error.message);
      // Handle errors (e.g., unable to create account)
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup_content;
