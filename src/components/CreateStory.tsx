import React from 'react';

interface CreateStoryProps {
  src: string;
}

const CreateStory: React.FC<CreateStoryProps> = ({ src }) => {
  return (
    <div className='lg:relative h-16 w-16 md:h-20 md:w-20 lg:h-56 lg:w-32 p-3 cursor-pointer rounded-3xl transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
      <div className='absolute top-0 left-0 h-full lg:h-3/4'>
        <img
          className='h-full rounded-t-3xl rounded-b-3xl lg:rounded-b-none filter brightness-75 object-cover'
          src={src}
          alt='src'
        />
      </div>
      <div className='hidden lg:flex items-center justify-center absolute p-1 rounded-full top-[144px] left-[40px] bg-white dark:bg-gray-700 w-12 h-12 z-20'>
        <div className='hidden lg:flex items-center justify-center bg-blue-500 text-white w-full h-full rounded-full text-xl font-bold'>
          +
        </div>
      </div>
      <div className='absolute hidden lg:flex justify-center bottom-0 left-0 bg-white dark:bg-gray-700 w-full h-1/4 rounded-b-3xl z-10'>
        <p className='text-center text-sm font-semibold mt-7 dark:text-white'>Create Story</p>
      </div>
    </div>
  )
};

export default CreateStory;
