import React from "react";

interface PostImageProps {
  postImage: string;
}

const PostImage: React.FC<PostImageProps> = ({ postImage }) => {
  return (
    <div className='flex justify-center bg-white dark:bg-gray-700'>
      <img className='object-cover mb-4 object-center' src={postImage} alt='post' />
    </div>
  );
};

export default PostImage;
