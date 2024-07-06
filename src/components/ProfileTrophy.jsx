import React from 'react';

const ProfileTrophy = ({ username }) => {
  return (
    <div className='pt-10'>
     <iframe
        src={`https://github-profile-trophy.vercel.app/?username=${username}&column=4&margin-w=15&margin-h=15`}
        width="100%"
        height="200px"
        title="GitHub Profile Trophy"
      ></iframe>
    </div>
  );
};

export default ProfileTrophy;
