import React from "react";

interface StoryCardProps {
  name: string;
  src: string;
  profile: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ name, src, profile }) => {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3'>
      <img
        className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 object-cover'
        src={profile}
        alt='profile'
        width={40}
        height={40}
      />
      <img
        className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
        src={src}
        alt=''
      />
    </div>
  );
};

export default StoryCard;
