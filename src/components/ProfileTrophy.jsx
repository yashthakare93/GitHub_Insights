import React from 'react';

const ProfileTrophy = ({ username }) => {
  return (
    <div className="w-full h-full px-4">
      <iframe
        src={`https://github-profile-trophy.vercel.app/?username=${username}&column=4&margin-w=20&margin-h=20`}
        width="100%"
        height="100%"
        title="GitHub Profile Trophy"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default ProfileTrophy;
