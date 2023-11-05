import React from 'react';
import LogoutButton from './LogoutButton';
import UserPoints from './UserPoints';

const ProfileContent = () => {
  return (
    <div>
      <UserPoints />
      <LogoutButton />
    </div>
  );
};

export default ProfileContent;
