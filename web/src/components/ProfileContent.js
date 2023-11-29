import React from 'react';
import LogoutButton from './LogoutButton';
import UserPoints from './UserPoints';
import UserLevelSelect from './UserLevelSelect';
import UserSchedule from './UserSchedule';

const ProfileContent = () => {
  return (
    <div className="">
      <UserPoints />
      <UserLevelSelect />
      <UserSchedule />
      <LogoutButton />
    </div>
  );
};

export default ProfileContent;
