import React from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed: React.FC = () => {
  return (
    <div className='flex-grow w-full h-screen pb-44 pt-6 xl:mr-40 overflow-x-hidden overflow-y-auto scrollbar-hide'>
      <div className='flex flex-col items-center mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
        <Stories />
        <div>
          <InputBox />
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Feed;
