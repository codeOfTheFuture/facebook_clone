import React from "react";

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
      <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
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
    </div>
  );
};

export default Post;
