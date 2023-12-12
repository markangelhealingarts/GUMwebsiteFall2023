import React from 'react';
import LogoutButton from './LogoutButton';
import DeleteAccountButton from './DeleteAccountButton';
import UserPoints from './UserPoints';
import UserLevelSelect from './UserLevelSelect';
import UserSchedule from './UserSchedule';

const ProfileContent = () => {
  return (
    <div className="flex flex-col items-center">
      <UserPoints />
      <UserLevelSelect />
      <UserSchedule />
      <div className='flex lg:justify-center justify-around pt-2 w-full '>
        <LogoutButton />
        <DeleteAccountButton />
      </div>
    </div>
  );
};

export default ProfileContent;
