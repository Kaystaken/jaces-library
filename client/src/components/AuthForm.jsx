// AuthForm.jsx
import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle form submission, likely sending the data to a server
    console.log("Form submitted");
  };

  return (
    <div>
      {isLogin ? (
        <form onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Sign Up Form</h2>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
      )}
      <button onClick={handleToggle}>
        {isLogin ? 'Go to Sign Up' : 'Go to Login'}
      </button>
    </div>
  );
};

export default AuthForm;
