import { DocumentData } from "firebase/firestore";
import React from "react";
import ReactionTotalIcon from "./ReactionTotalIcon";

interface ReactionTotalProps {
  reactionTotals: {
    likes: DocumentData[];
    hearts: DocumentData[];
    hahas: DocumentData[];
    wows: DocumentData[];
    sads: DocumentData[];
    angrys: DocumentData[];
  };
  reactionsCount: number;
}

const ReactionTotal: React.FC<ReactionTotalProps> = (props) => {
  const { likes, hearts, hahas, wows, sads, angrys } = props.reactionTotals,
    { reactionsCount } = props,
    src = [
      "like-count.jpg",
      "heart-count.jpg",
      "haha-count.jpg",
      "wow-count.png",
      "sad-count.jpg",
      "angry-count.jpg",
    ];

  return (
    <div className='flex justify-center items-center'>
      {[likes, hearts, hahas, wows, sads, angrys].map((reaction, index) => (
        <ReactionTotalIcon key={index} reaction={reaction} src={src[index]} />
      ))}
      {reactionsCount > 0 && (
        <p className='ml-1 text-sm cursor-pointer hover:underline'>{reactionsCount}</p>
      )}
    </div>
  );
};

export default ReactionTotal;
