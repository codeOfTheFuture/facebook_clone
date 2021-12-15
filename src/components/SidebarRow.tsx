import React from "react";

interface SidebarRowProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
  title: string;
  photoURL: string;
  displayName: string;
}

const SidebarRow: React.FC<SidebarRowProps> = ({
  Icon,
  title,
  photoURL,
  displayName,
}) => {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer dark:text-gray-200 dark:hover:bg-gray-600'>
      {photoURL && (
        <img
          className='rounded-full'
          width={30}
          height={30}
          src={photoURL}
          alt='Profile'
        />
      )}

      {Icon && <Icon className='h-8 w-8 text-blue-500' />}

      {(displayName || title) && (
        <p className='hidden sm:inline-flex font-medium'>
          {displayName || title}
        </p>
      )}
    </div>
  );
};

export default SidebarRow;
