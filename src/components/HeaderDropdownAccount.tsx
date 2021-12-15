import { useState } from "react";
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

const HeaderDropdownAccount: React.FC = () => {
  const { user, photoURL, logOut } = useAuth();
  const [displayOptionsOpen, setDisplayOptionsOpen] = useState(false);
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

  const displayOpen = (): void => {
    setDisplayOptionsOpen((prevState) => !prevState);
  };

  return (
    <div className='absolute inline-block top-10 mt-2 right-0 p-2 border border-gray-200 bg-white rounded-lg shadow-lg z-10 overflow-x-hidden dark:bg-gray-700 dark:border-gray-700'>
      <div className='relative'>
        {user?.displayName && (<HeaderDropdownButton
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

export default HeaderDropdownAccount;
