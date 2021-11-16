import React from "react";

interface RadioButtonProps {
  name: string;
  radioId: string;
  darkModeOn: boolean;
  toggleDarkMode: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  return (
    <label
      htmlFor={props.radioId}
      className='inline-flex w-full justify-between items-center cursor-pointer p-2 hover:bg-gray-200 rounded-lg'
      onClick={props.toggleDarkMode}
    >
      <p className='text-md font-semibold'>{props.name}</p>
      <div>
        <input
          type='radio'
          name='radioBtnInput'
          id={props.radioId}
          className='hidden peer'
          defaultChecked={
            ((props.radioId === "off" && !props.darkModeOn) ||
              (props.radioId === "on" && props.darkModeOn)) &&
            true
          }
        />
        <div className='w-6 h-6 border-2 border-gray-600 peer-checked:border-blue-500 rounded-full box-border p-[2px] after:w-full after:h-full after:block after:bg-blue-500 after:rounded-full after:transform after:scale-0 peer-checked:after:scale-100'></div>
      </div>
    </label>
  );
};

export default RadioButton;
