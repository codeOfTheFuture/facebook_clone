import React from "react";
import HeaderDropdownButton from "./HeaderDropdownButton";
import {
  AnnotationIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  MoonIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import DropdownDisplay from "./DropdownDisplay";

interface DropdownAccountProps {
  dropdownOpen: boolean;
  displayOpen: () => void;
  displayOptionsOpen: boolean;
}

const DropdownAccount: React.FC<DropdownAccountProps> = (props) => {
  const { dropdownOpen, displayOpen, displayOptionsOpen } = props;
  const { user, photoURL, logOut } = useAuth();
  // Log out
  const history = useHistory();

  const handleLogOut = async (): Promise<void> => {
    try {
      await logOut();
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`absolute transition-all ease-in-out duration-200 opacity-0 top-10 right-0 mt-2 p-2 border border-gray-200 bg-white rounded-lg overflow-x-hidden shadow-lg pointer-events-none dark:bg-gray-700 dark:border-gray-700 ${dropdownOpen && "opacity-100 pointer-events-auto"
        }`}
    >
      <div className='relative'>
        {user?.displayName && (
          <HeaderDropdownButton
            className='dropdownProfileBtn'
            img={photoURL}
            heading={user?.displayName}
            text='See your profile'
          />
        )}
        <hr />
        <HeaderDropdownButton
          className='dropdownFeedbackBtn'
          Icon={AnnotationIcon}
          heading='Give feedback'
          text='Help us improve the new Facebook'
        />
        <hr />
        <HeaderDropdownButton
          className='dropdownBtn'
          Icon={CogIcon}
          SecondaryIcon={ChevronRightIcon}
          heading='Settings & Privacy'
        />
        <HeaderDropdownButton
          className='dropdownBtn'
          Icon={QuestionMarkCircleIcon}
          SecondaryIcon={ChevronRightIcon}
          heading='Help & Support'
        />
        <HeaderDropdownButton
          className='dropdownBtn'
          Icon={MoonIcon}
          SecondaryIcon={ChevronRightIcon}
          heading='Display & Accessibility'
          clickHandler={displayOpen}
        />
        <HeaderDropdownButton
          className='dropdownBtn'
          Icon={LogoutIcon}
          heading='Log Out'
          clickHandler={handleLogOut}
        />
      </div>
      <DropdownDisplay
        displayOptionsOpen={displayOptionsOpen}
        clickHandler={displayOpen}
      />
    </div>
  );
};

export default DropdownAccount;
