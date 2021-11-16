import React from "react";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

interface PostProps {
  name: string;
  message: string;
  email: string;
  postImage: string;
  image: string;
  timestamp: string;
}

const Post: React.FC<PostProps> = ({
  name,
  message,
  email,
  postImage,
  image,
  timestamp,
}) => {
  return (
    <div className='flex flex-col'>
      <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm dark:bg-gray-700 dark:text-gray-200'>
        <div className='flex items-center space-x-2'>
          <img
            className='rounded-full'
            src={image}
            alt='profile'
            width={40}
            height={40}
          />
          <div>
            <p className='font-medium'>{name}</p>
            <p className='text-xs text-gray-400'>{timestamp}</p>
          </div>
        </div>

        <p className='pt-4'>{message}</p>
      </div>

      {postImage && (
        <div className='relative h-56 md:h-96 bg-white dark:bg-gray-700'>
          <img
            className='object-cover object-center'
            src={postImage}
            alt='post'
          />
        </div>
      )}

      <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t dark:bg-gray-700 dark:text-gray-200'>
        <div className='inputIcon rounded-none rounded-bl-2xl'>
          <ThumbUpIcon height={20} />
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='inputIcon rounded-none'>
          <ChatAltIcon height={20} />
          <p className='text-xs sm:text-base'>Comment</p>
        </div>
        <div className='inputIcon rounded-none rounded-br-2xl'>
          <ShareIcon height={20} />
          <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
