import React from "react";

interface StoryCardProps {
  name: string;
  src: string;
  profile: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ name, src, profile }) => {
  return (
    <div className='lg:relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 p-3 cursor-pointer rounded-3xl transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
      <img
        className='absolute top-3 left-3 w-10 h-10 opacity-0 lg:opacity-100 rounded-full z-10 object-cover object-center border-2 border-blue-500'
        src={profile}
        alt='profile'
      />
      <img
        className='absolute top-0 left-0 object-cover w-full h-full rounded-3xl filter brightness-75'
        src={src}
        alt='src'
      />
      <p className='absolute opacity-0 ml-1 lg:opacity-100 bottom-2 w-5/6 text-white text-sm font-bold truncate'>
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
