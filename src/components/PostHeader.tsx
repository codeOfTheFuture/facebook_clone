import React from "react";
import Moment from "react-moment";

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
        <Moment fromNow className='text-sm text-gray-400'>
          {timestamp}
        </Moment>
      </div>
    </header>
  );
};

export default PostHeader;
