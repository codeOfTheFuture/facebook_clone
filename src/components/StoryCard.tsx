import React from "react";

interface StoryCardProps {
  name: string;
  src: string;
  profile: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ name, src, profile }) => {
  return (
    <div className='relative h-56 w-32 p-3 cursor-pointer lg:rounded-3xl overflow-x transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
      <img
        className='absolute top-20 left-0 lg:top-3 lg:left-3 w-24 h-24 lg:w-8 lg:h-8 rounded-full z-10 object-cover object-center border-2 border-blue-500'
        src={profile}
        alt='profile'
      />
      <img
        className='hidden lg:block absolute top-0 left-0 object-cover w-full h-full lg:rounded-3xl filter brightness-75'
        src='https://www.wivb.com/wp-content/uploads/sites/97/2018/08/josh20allen_1534803411328.jpg_52506138_ver1.0.jpg?w=1280'
        alt='src'
      />
      {/* <p className='absolute opacity-0 ml-2 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>
        {name}
      </p> */}
    </div>
  );
};

export default StoryCard;
