import React from 'react';

interface ReactionProps {
  reaction: string;
}

const Reaction: React.FC<ReactionProps> = ({ reaction }) => {
  return (
    <div className='flex justify-center items-center w-10 h-10 cursor-pointer rounded-full hover:transform hover:scale-150 hover:transition-transform hover:duration-500'>
      <img src={reaction} alt="reaction" width={40} height={40} />
    </div>
  )
}

export default Reaction;
