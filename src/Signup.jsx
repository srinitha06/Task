import React from 'react';
import './Auth.css';

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <div className="auth-footer">
          <p>
            Already have an account? <a href="/signin">Sign in now</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
