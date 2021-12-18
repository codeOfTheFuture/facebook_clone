import React from "react";
import Reaction from "./Reaction";

interface ReactionsProps {
  likeButtonHover: boolean;
  addReaction: () => Promise<void>;
  likeButtonEnter: () => void;
  likeButtonLeave: () => void;
}

const Reactions: React.FC<ReactionsProps> = (props) => {
  const { likeButtonHover, addReaction, likeButtonEnter, likeButtonLeave } =
    props;

  return (
    <div
      className={`flex items-center absolute transform translate-y-0 opacity-0 bottom-0 left-0 bg-white dark:bg-gray-600 rounded-2xl border transition-transform ease-out delay-300 duration-500 pointer-events-none ${likeButtonHover && "transform -translate-y-10 opacity-100 pointer-events-auto"
        }`}
      onMouseEnter={() => likeButtonEnter()}
      onMouseLeave={() => likeButtonLeave()}
    >
      <Reaction
        reaction='/images/reactions/like.gif'
        reactionType='like'
        addReaction={addReaction}
      />
      <Reaction
        reaction='/images/reactions/heart.gif'
        reactionType='heart'
        addReaction={addReaction}
      />
      <Reaction
        reaction='/images/reactions/haha.gif'
        reactionType='haha'
        addReaction={addReaction}
      />
      <Reaction
        reaction='/images/reactions/wow.gif'
        reactionType='wow'
        addReaction={addReaction}
      />
      <Reaction
        reaction='/images/reactions/sad.gif'
        reactionType='sad'
        addReaction={addReaction}
      />
      <Reaction
        reaction='/images/reactions/angry.gif'
        reactionType='angry'
        addReaction={addReaction}
      />
    </div>
  );
};

export default Reactions;
