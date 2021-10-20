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
        className='absolute opacity-0 lg:opacity-100 rounded-full z-50 object-cover'
        src={profile}
        alt='profile'
        style={{
          width: "30px",
          height: "30px",
          top: "20px",
          left: "25px",
        }}
      />
      <img
        className='absolute object-cover filter brightness-75 rounded-full lg:rounded-3xl'
        src={src}
        alt='src'
        style={{ width: "120px", height: "200px" }}
      />
      <p className='absolute opacity-0 ml-2 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
