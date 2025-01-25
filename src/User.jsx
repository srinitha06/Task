import React from 'react';

const User = ({ user, profileType }) => {
  if (profileType === 'admin') {
    return <h1>Welcome Admin: {user.name}</h1>;
  }

  if (profileType === 'college') {
    return <h1>Welcome to {user.name}'s College Profile</h1>;
  }

  return <h1>Welcome to {user.name}'s Profile</h1>;
};

export default User;
