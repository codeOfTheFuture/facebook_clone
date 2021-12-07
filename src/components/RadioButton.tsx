import React from "react";
import { useAuth } from "../context/AuthContext";
import { useUserProfile } from "../context/UserProfileContext";

interface RadioButtonProps {
  name: string;
  radioId: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, radioId }) => {
  const { user } = useAuth(),
    { darkModeEnabled, darkModeToggle } = useUserProfile();

  const handleClick = () =>
    radioId === "ON"
      ? user && darkModeToggle(user.uid, true)
      : user && darkModeToggle(user.uid, false);

  return (
    <label
      htmlFor={radioId}
      className='inline-flex w-full justify-between items-center cursor-pointer p-2 hover:bg-gray-200 rounded-lg dark:hover:bg-gray-600'
      onClick={handleClick}
    >
      <p className='text-md font-semibold'>{name}</p>
      <div>
        <input
          type='radio'
          name='radioBtnInput'
          id={radioId}
          className='hidden peer'
          defaultChecked={
            ((radioId === "OFF" && !darkModeEnabled) ||
              (radioId === "ON" && darkModeEnabled)) &&
            true
          }
        />
        <div className='w-6 h-6 border-2 border-gray-600 peer-checked:border-blue-500 rounded-full box-border p-[2px] after:w-full after:h-full after:block after:bg-blue-500 after:rounded-full after:transform after:scale-0 peer-checked:after:scale-100 dark:border-gray-500'></div>
      </div>
    </label>
  );
};

export default RadioButton;
