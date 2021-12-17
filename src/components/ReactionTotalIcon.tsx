import { DocumentData } from "firebase/firestore";
import React from "react";

interface ReactionTotalIconProps {
  reaction: DocumentData[];
  src: string;
}

const ReactionTotalIcon: React.FC<ReactionTotalIconProps> = (props) => {
  const { reaction, src } = props;

  return (
    <div className='rounded-full'>
      {reaction.length > 0 && (
        <img
          src={`/images/reactions/${src}`}
          alt='Like count'
          className='rounded-full m-0 p-0 border-none cursor-pointer'
          width={20}
          height={20}
        />
      )}
    </div>
  );
};

export default ReactionTotalIcon;
