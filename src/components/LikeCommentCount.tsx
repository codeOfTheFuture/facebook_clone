import React from "react";

interface LikeCommentCountProps {
  commentCount: number;
  toggleComments: () => void;
}

const LikeCommentCount: React.FC<LikeCommentCountProps> = (props) => {
  const { commentCount, toggleComments } = props;

  return (
    <div className='flex items-center justify-between shadow-none bg-white p-3 text-sm text-gray-400 dark:bg-gray-700 dark:text-gray-200'>
      <div>
        <p>1 Like</p>
      </div>
      <div onClick={toggleComments}>
        <p className='hover:underline cursor-pointer'>
          {commentCount === 1
            ? `${commentCount} Comment`
            : `${commentCount} Comments`}
        </p>
      </div>
    </div>
  );
};

export default LikeCommentCount;
