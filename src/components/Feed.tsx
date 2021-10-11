import React from "react";
import Stories from "./Stories";

const Feed: React.FC = () => {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto'>
      <div>
        <Stories />
        {/* InputBox */}
        {/* Posts */}
      </div>
    </div>
  );
};

export default Feed;
