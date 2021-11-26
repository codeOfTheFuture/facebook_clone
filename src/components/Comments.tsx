import { DocumentData } from "firebase/firestore";
import React, { useState } from "react";
import Comment from "./Comment";

interface CommentsProps {
  comments: DocumentData[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  const [showAllComments, setShowAllComments] = useState(false);

  return (
    <div className='w-full px-5 bg-white dark:bg-gray-700'>
      {!showAllComments && comments.length ? (
        <div className='flex flex-col'>
          <p
            className='text-sm font-semibold text-gray-600 hover:underline cursor-pointer mt-2 dark:text-gray-200'
            onClick={() => setShowAllComments(true)}
          >
            {comments?.length - 1 === 1
              ? `View ${comments?.length - 1}
                more comment`
              : `View ${comments?.length - 1}
                more comments`}
          </p>

          {comments.length && (
            <Comment key={comments[0].id} commentData={comments[0]} />
          )}
        </div>
      ) : (
        comments?.map((comment: DocumentData) => (
          <Comment key={comment.id} commentData={comment} />
        ))
      )}
    </div>
  );
};

export default Comments;
