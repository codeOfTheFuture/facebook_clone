import React from "react";
import Reaction from "./Reaction";

interface ReactionsProps {
  likeButtonHover: boolean;
  likeButtonEnter: () => void;
  likeButtonLeave: () => void;
}

const Reactions: React.FC<ReactionsProps> = (props) => {
  const { likeButtonHover, likeButtonEnter, likeButtonLeave } = props;

  return (
    <div
      className={`flex items-center absolute transform translate-y-0 opacity-0 bottom-0 left-0 bg-white rounded-2xl border ${likeButtonHover && "transform -translate-y-10 opacity-100"
        } transition-all ease-in-out duration-1000`}
      onMouseEnter={() => likeButtonEnter()}
      onMouseLeave={() => likeButtonLeave()}
    >
      <Reaction reaction='/images/reactions/like.gif' />
      <Reaction reaction='/images/reactions/heart.gif' />
      <Reaction reaction='/images/reactions/haha.gif' />
      <Reaction reaction='/images/reactions/wow.gif' />
      <Reaction reaction='/images/reactions/sad.gif' />
      <Reaction reaction='/images/reactions/angry.gif' />
    </div>
  );
};

export default Reactions;
