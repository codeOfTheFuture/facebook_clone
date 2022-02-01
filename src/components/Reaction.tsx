import React from "react";

interface ReactionProps {
  reaction: string;
  reactionType: string;
  addReaction: (reactionType: string) => Promise<void>;
}

const Reaction: React.FC<ReactionProps> = ({
  reaction,
  reactionType,
  addReaction,
}) => {

  return (
    <div
      className='flex justify-center items-center w-10 h-10 cursor-pointer rounded-full hover:transform hover:scale-150 hover:transition-transform hover:duration-500'
      onClick={() => addReaction(reactionType)}
    >
      <img
        className='rounded-full'
        src={reaction}
        alt='reaction'
        width={40}
        height={40}
      />
    </div>
  );
};

export default Reaction;
