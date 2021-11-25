import React from "react";
import Moment from 'react-moment';
import { DocumentData } from "firebase/firestore";

interface CommentProps {
  commentData: DocumentData;
}

const Comment: React.FC<CommentProps> = ({ commentData }) => {
  const { comment, timestamp, image, name, commentImage } = commentData.data();
  return (
    <div className='flex mt-4'>
      <div className='flex items-center justify-center w-10 h-full'>
        <img src={image} alt="" className='rounded-full' width={30} />
      </div>
      <div className='flex flex-col justify-center items-start ml-4'>
        <div className='bg-gray-100 p-4 rounded-2xl dark:bg-gray-500 dark:text-gray-200'>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm">{comment}</p>
        </div>
        {commentImage && (
          <img className='rounded-2xl' src={commentImage} alt="Comment" width={200} />
        )}
        <div className='ml-4 dark:text-gray-200'>
          <span className="text-xs cursor-pointer text-gray-700 dark:text-gray-200">Like</span>
          <span className='text-xs mx-1'>&middot;</span>
          <span className="text-xs cursor-pointer text-gray-700 dark:text-gray-200">Reply</span>
          <span className='text-xs mx-1'>&middot;</span>
          <Moment className="text-xs text-gray-400" fromNow>{new Date(timestamp?.toDate()).toLocaleString()}</Moment>
        </div>
      </div>
    </div>
  );
};

export default Comment;
