import React from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed: React.FC = () => {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 overflow-y-auto scrollbar-hide'>
      <div className='flex flex-col items-center mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
