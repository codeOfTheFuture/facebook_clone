import HeaderDropdownButton from "./HeaderDropdownButton";
import { AnnotationIcon, CogIcon, QuestionMarkCircleIcon, MoonIcon, LogoutIcon } from '@heroicons/react/solid';


const HeaderDropdownAccount = () => {
  return (
    <>
      <HeaderDropdownButton className='dropdownProfileBtn' img='https://graph.facebook.com/6372305086142776/picture' heading='Jeff Oliver' text='See your profile' />
      <hr />
      <HeaderDropdownButton className='dropdownFeedbackBtn' Icon={AnnotationIcon} heading='Give feedback' text='Help us improve the new Facebook' />
      <hr />
      <HeaderDropdownButton className='dropdownBtn' Icon={CogIcon} heading='Settings & Privacy' />
      <HeaderDropdownButton className='dropdownBtn' Icon={QuestionMarkCircleIcon} heading='Help & Support' />
      <HeaderDropdownButton className='dropdownBtn' Icon={MoonIcon} heading='Display & Accessibility' />
      <HeaderDropdownButton className='dropdownBtn' Icon={LogoutIcon} heading='Log Out' />
    </>
  )
}

export default HeaderDropdownAccount;
