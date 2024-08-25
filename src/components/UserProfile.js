import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <p>Please log in.</p>;

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <img src={user.avatar} alt="User Avatar" style={{ width: 100, height: 100, borderRadius: '50%' }} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserProfile;
