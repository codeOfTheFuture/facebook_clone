import { DocumentTextIcon } from "@heroicons/react/outline";
import { ArrowLeftIcon, MoonIcon } from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";

interface DropdownDisplayProps {
  displayOptionsOpen: boolean;
  clickHandler: () => void;
}

const DropdownDisplay: React.FC<DropdownDisplayProps> = (props) => {
  return (
    <div
      className={`absolute flex flex-col items-center w-full h-full p-4 bg-white top-0 -right-96 z-20 ${props.displayOptionsOpen && 'left-0'
        }`}
    >
      <div className='flex w-full items-center'>
        <HeaderIcon
          Icon={ArrowLeftIcon}
          iconClassName='headerIconBack'
          handleClick={props.clickHandler}
          backBtn={true}
        />
        <h1 className='text-xl font-bold text-center ml-4'>
          Display & Accessibility
        </h1>
      </div>
      <div>
        <div className='flex flex-col justify-center items-center mt-4'>
          <div className='flex'>

            <MoonIcon className="p-2 h-12 w-12 bg-gray-200 rounded-full" />

            <div>
              <h2 className="font-bold">Dark Mode</h2>
              <p className="text-sm">Adjust the appearance of Facebook to reduce glare and give your eyes a break</p>
            </div>
          </div>
          <div>
            <input type="radio" name="darkModeOff" id="darkModeOff" />
            <input type="radio" name="darkModeOn" id="darkModeOn" />
          </div>
        </div>
        <div>
          <div className='flex'>
            <DocumentTextIcon className="w-8 h-8" />
            <div>
              <h2 className="font-bold">Compact Mode</h2>
              <p className="text-sm">Make your font size smaller so more content can fit on the screen</p>
            </div>
          </div>
          <div>
            <input type="radio" name="compactModeOff" id="compactModeOff" />
            <input type="radio" name="compactModeOn" id="compactModeOn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownDisplay;
