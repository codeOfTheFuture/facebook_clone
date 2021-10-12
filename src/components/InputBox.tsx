import React, { FormEvent, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.setup";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

const InputBox: React.FC = () => {
  const { user } = useAuth(),
    inputRef = useRef<HTMLInputElement>(null);

  const sendPost = async (e: FormEvent) => {
    e.preventDefault();

    if (!inputRef.current!.value) return;

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        message: inputRef.current!.value,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        timestamp: serverTimestamp(),
      });

      inputRef.current!.value = "";

      console.log(docRef);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <img
          className='rounded-full'
          src={user.photoURL + "?type=large"}
          alt='profile'
          width={40}
          height={40}
        />
        <form className='flex flex-1'>
          <input
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
            type='text'
            ref={inputRef}
            placeholder={`What's on your mind, ${
              user.displayName.split(" ")[0]
            }?`}
          />
          <button hidden type='submit' onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>

      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div className='inputIcon'>
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
        </div>
        <div className='inputIcon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
