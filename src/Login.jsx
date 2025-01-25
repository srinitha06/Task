import React, { useState } from 'react';
import User from './User';

const Login = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [profileType, setProfileType] = useState('user');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = () => {

    const users = {
      user: { loginId: 'user123', password: 'user123' },
      admin: { loginId: 'admin123', password: 'admin123' },
      college: { loginId: 'college123', password: 'college123' },
    };

    const validCredentials = users[profileType];
    if (
      loginId.toLowerCase() === validCredentials.loginId.toLowerCase() &&
      password === validCredentials.password
    ) {
      setLoginStatus('Success');
    } else {
      setLoginStatus('Denied: Incorrect login ID or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Login ID:</label>
        <input
          type="text"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          placeholder="Enter your Login ID"
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        />
      </div>
      <div className="form-group">
        <label>Profile Type:</label>
        <select onChange={(e) => setProfileType(e.target.value)} value={profileType}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="college">College</option>
        </select>
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>

      {loginStatus === 'Success' ? (
        <User user={{ name: loginId }} profileType={profileType} />
      ) : (
        loginStatus && <p className="login-status">{loginStatus}</p>
      )}
    </div>
  );
};

export default Login;
