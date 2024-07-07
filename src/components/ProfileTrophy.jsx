import React from 'react';

const ProfileTrophy = ({ username }) => {
  return (
    <div className="lg:w-full h-full ">
      <iframe
        src={`https://github-profile-trophy.vercel.app/?username=${username}&column=4&margin-w=10&margin-h=10`}
        width="100%"
        height="100%"
        title="GitHub Profile Trophy"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default ProfileTrophy;
