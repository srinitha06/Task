import React from 'react';
import './Auth.css';

const SignIn = () => {
  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="auth-form">
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-button">Sign In</button>
        </form>
        <div className="auth-footer">
          <p>
            New to Netflix? <a href="/signup">Sign up now</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
