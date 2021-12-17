import React from "react";
import { DocumentData } from "firebase/firestore";
import { filterReactionsByType } from "../helpers";
import ReactionTotal from "./ReactionTotal";

interface ReactionCommentCountProps {
  reactions: DocumentData[];
  commentCount: number;
  toggleComments: () => void;
}

const ReactionCommentCount: React.FC<ReactionCommentCountProps> = (props) => {
  const { reactions, commentCount, toggleComments } = props,
    likes = filterReactionsByType(reactions, "like"),
    hearts = filterReactionsByType(reactions, "heart"),
    hahas = filterReactionsByType(reactions, "haha"),
    wows = filterReactionsByType(reactions, "wow"),
    sads = filterReactionsByType(reactions, "sad"),
    angrys = filterReactionsByType(reactions, "angry");

  return (
    <div className='flex items-center justify-between shadow-none bg-white p-3 text-sm text-gray-400 dark:bg-gray-700 dark:text-gray-200'>
      <ReactionTotal
        reactionTotals={{ likes, hearts, hahas, wows, sads, angrys }}
        reactionsCount={reactions.length}
      />
      {commentCount > 0 && (
        <div onClick={toggleComments}>
          <p className='hover:underline cursor-pointer'>
            {commentCount === 1
              ? `${commentCount} Comment`
              : `${commentCount} Comments`}
          </p>
        </div>
      )}
    </div>
  );
};

export default ReactionCommentCount;
