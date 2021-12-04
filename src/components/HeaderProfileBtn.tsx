import { useAuth } from "../context/AuthContext";
import { useUserProfile } from "../context/UserProfileContext";

const HeaderProfileBtn: React.FC = () => {
  const { user } = useAuth();
  const { photoURL } = useUserProfile();

  return (
    <div className='flex items-center sm:space-x-2 p-1 hover:bg-gray-200 rounded-full cursor-pointer dark:hover:bg-gray-600'>
      {photoURL && (
        <img
          src={photoURL}
          alt=''
          width={30}
          height={30}
          className='rounded-full'
        />
      )}

      <p className='whitespace-nowrap font-semibold pr-3 dark:text-gray-200'>
        {user.displayName.split(" ")[0]}
      </p>
    </div>
  );
};

export default HeaderProfileBtn;
