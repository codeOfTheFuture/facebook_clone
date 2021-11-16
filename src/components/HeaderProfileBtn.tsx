interface HeaderProfileBtnProps {
  photoURL: string;
  displayName: string;
}

const HeaderProfileBtn: React.FC<HeaderProfileBtnProps> = (props) => {
  return (
    <div className='flex items-center sm:space-x-2 p-1 hover:bg-gray-200 rounded-full cursor-pointer dark:hover:bg-gray-600'>
      <img
        src={props.photoURL}
        alt=''
        width={30}
        height={30}
        className='rounded-full'
      />

      <p className='whitespace-nowrap font-semibold pr-3 dark:text-gray-200'>
        {props.displayName.split(" ")[0]}
      </p>
    </div>
  )
}

export default HeaderProfileBtn;
