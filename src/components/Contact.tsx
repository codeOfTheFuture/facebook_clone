import React from "react";

interface ContactProps {
  src: string;
  name: string;
}

const Contact: React.FC<ContactProps> = ({ src, name }) => {
  return (
    <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl dark:text-gray-200 dark:hover:bg-gray-600'>
      <img
        className='rounded-full object-cover'
        src={src}
        alt={`Contact-${name}`}
        style={{ width: "50px", height: "50px" }}
      />
      <p>{name}</p>
      <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full' />
    </div>
  );
};

export default Contact;
