import React from "react";
import StoryCard from "./StoryCard";
import stories from "../data/storiesData";

const Stories: React.FC = () => {
  return (
    <div className='flex justify-center space-x-3 w-auto mx-auto'>
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
