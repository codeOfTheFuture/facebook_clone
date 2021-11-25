import React from "react";
import { CameraIcon } from "@heroicons/react/outline";
import { useAuth } from "../context/AuthContext";

const CommentInput: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className='flex items-center w-full p-4 rounded-b-2xl bg-white shadow-md'>
      <img
        src={user.photoURL}
        className='w-7 h-7 rounded-full mr-2'
        alt='User profile'
      />
      <div className='flex items-center w-full rounded-2xl p-1 bg-gray-100'>
        <input
          className='inline-flex flex-shrink items-center mx-2 w-full outline-none bg-transparent placeholder-gray-500'
          type='text'
          placeholder='Write a comment...'
        />
        <CameraIcon className='h-6 mr-2 text-gray-400 rounded-full hover:bg-gray-300 cursor-pointer' />
      </div>
    </div>
  );
};

export default CommentInput;
