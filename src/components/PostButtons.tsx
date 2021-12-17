import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import React from "react";
import PostButton from "./PostButton";

interface PostButtonsProps {
  addReaction: () => Promise<void>;
  toggleComments: () => void;
  likeButtonEnter: () => void;
  likeButtonLeave: () => void;
  showComments: boolean;
  userLikedPost: boolean;
}

const PostButtons: React.FC<PostButtonsProps> = (props) => {
  const { addReaction, toggleComments, likeButtonEnter, likeButtonLeave, showComments, userLikedPost } =
    props;

  return (
    <div
      className={`flex justify-between items-center bg-white shadow-md text-gray-400 border-t dark:bg-gray-700 dark:text-gray-200 ${!showComments && "rounded-b-2xl"
        }`}
    >
      <PostButton
        Icon={ThumbUpIcon}
        iconName='Like'
        rounded='rounded-bl-2xl'
        showComments={showComments}
        likeButtonEnter={likeButtonEnter}
        likeButtonLeave={likeButtonLeave}
        addReaction={addReaction}
        userLikedPost={userLikedPost}
      />
      <PostButton
        Icon={ChatAltIcon}
        iconName='Comment'
        rounded='rounded-none'
        toggleComments={toggleComments}
        showComments={showComments}
      />
      <PostButton
        Icon={ShareIcon}
        iconName='Share'
        rounded='rounded-br-2xl'
        showComments={showComments}
      />
    </div>
  );
};

export default PostButtons;
