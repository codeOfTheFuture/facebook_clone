import { ArrowLeftIcon, MoonIcon } from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import RadioButton from "./RadioButton";

interface DropdownDisplayProps {
  displayOptionsOpen: boolean;
  clickHandler: () => void;
}

const DropdownDisplay: React.FC<DropdownDisplayProps> = (props) => {
  const { displayOptionsOpen, clickHandler } = props;

  return (
    <div
      className={`absolute flex flex-col items-center w-full h-full p-4 bg-white rounded-lg top-0 left-0 dark:bg-gray-700 dark:text-gray-200 transition-all duration-200 ease-in transform translate-x-96 ${displayOptionsOpen && 'translate-x-0'}`}
    >
      <div className='flex w-full items-center'>
        <HeaderIcon
          Icon={ArrowLeftIcon}
          iconClassName='headerIconBack'
          handleClick={clickHandler}
          backBtn={true}
          toolTipName={""}
        />
        <h1 className='text-xl font-bold text-center ml-4'>
          Display & Accessibility
        </h1>
      </div>
      <div className='flex'>
        <div className='flex flex-col justify-start items-center p-2 mt-2'>
          <MoonIcon
            className='rounded-full w-10 h-10 p-2 bg-gray-200 text-center dark:bg-gray-600
          dark:text-gray-200'
          />
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col p-2'>
            <h2 className='font-semibold'>Dark Mode</h2>
            <p className='text-xs text-gray-600 dark:text-gray-100'>
              Adjust the appearance of Facebook to reduce glare and give your
              eyes a break.
            </p>
          </div>
          <div className='flex flex-col'>
            <RadioButton name='Off' radioId='OFF' />
            <RadioButton name='On' radioId='ON' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownDisplay;
