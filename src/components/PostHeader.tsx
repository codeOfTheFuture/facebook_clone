import React from 'react';

interface PostHeaderProps {
  name: string;
  image: string;
  timestamp: string;
}

const PostHeader: React.FC<PostHeaderProps> = (props) => {
  const { name, image, timestamp } = props;

  return (
    <header className='flex items-center space-x-2'>
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
    </header>
  )
}

export default PostHeader;
