import HeaderDropdownButton from "./HeaderDropdownButton";
import { AnnotationIcon, CogIcon, QuestionMarkCircleIcon, MoonIcon, LogoutIcon } from '@heroicons/react/solid';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";


const HeaderDropdownAccount = () => {

  // Log out
  const { user, logOut } = useAuth();
  const history = useHistory();

  const handleLogOut = async () => {
    try {
      await logOut();
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <HeaderDropdownButton className='dropdownProfileBtn' img='https://graph.facebook.com/6372305086142776/picture' heading='Jeff Oliver' text='See your profile' />
      <hr />
      <HeaderDropdownButton className='dropdownFeedbackBtn' Icon={AnnotationIcon} heading='Give feedback' text='Help us improve the new Facebook' />
      <hr />
      <HeaderDropdownButton className='dropdownBtn' Icon={CogIcon}
        SecondaryIcon={ChevronRightIcon} heading='Settings & Privacy' />
      <HeaderDropdownButton className='dropdownBtn' Icon={QuestionMarkCircleIcon} SecondaryIcon={ChevronRightIcon} heading='Help & Support' />
      <HeaderDropdownButton className='dropdownBtn' Icon={MoonIcon} SecondaryIcon={ChevronRightIcon} heading='Display & Accessibility' />
      <HeaderDropdownButton className='dropdownBtn' Icon={LogoutIcon} heading='Log Out' clickHandler={handleLogOut} />
    </div>
  )
}

export default HeaderDropdownAccount;
