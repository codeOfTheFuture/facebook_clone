import { DocumentData } from "firebase/firestore";
import React, { useState } from "react";
import Comment from "./Comment";

interface CommentsProps {
  comments: DocumentData[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div className='w-full px-5 bg-white dark:bg-gray-700'>
      {comments?.map((comment: DocumentData) => (
        <Comment key={comment.id} commentData={comment} />
      ))}
    </div>
  );
};

export default Comments;
