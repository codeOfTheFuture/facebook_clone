import React from "react";

interface StoryCardProps {
  name: string;
  src: string;
  profile: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ name, src, profile }) => {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
      <img
        className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 object-fill'
        src={profile}
        alt='profile'
        width={40}
        height={40}
      />
      <img
        className='absolute object-cover filter brightness-75 rounded-full lg:rounded-3xl'
        src={src}
        alt='src'
        height={500}
        width={500}
      />
      <p className='absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
