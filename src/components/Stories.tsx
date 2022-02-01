import React from "react";
import StoryCard from "./StoryCard";
import stories from "../data/storiesData";
import CreateStory from "./CreateStory";
import { useAuth } from "../context/AuthContext";

const Stories: React.FC = () => {
  const { photoURL } = useAuth();

  return (
    <div className='flex justify-center space-x-2 sm:space-x-1 w-auto mx-auto'>
      {stories.map((story, index) => index > 0 ? (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ) : (
        <CreateStory key={story.id} src={photoURL} />
      ))}
    </div>
  );
};

export default Stories;
