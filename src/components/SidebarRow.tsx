import React from "react";

interface SidebarRowProps {
  src?: string;
  Icon?: any;
  title: string;
}

const SidebarRow: React.FC<SidebarRowProps> = ({ src, Icon, title }) => {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
      {src && (
        <img
          className='rounded-full fixed'
          width={30}
          height={30}
          src={src}
          alt='Profile'
        />
      )}
      {Icon && <Icon className='h-8 w-8 text-blue-500' />}

      <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  );
};

export default SidebarRow;
