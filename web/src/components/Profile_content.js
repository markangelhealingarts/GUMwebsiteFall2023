import React from 'react';
import LogoutButton from './Logout_button';
import UserPoints from './User_points';

const Profile_content = () => {
  return (
    <div>
      <UserPoints />
      <LogoutButton />
    </div>
  );
};

export default Profile_content;
