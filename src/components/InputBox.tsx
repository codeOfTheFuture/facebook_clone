import React, { FormEvent, ChangeEvent, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.setup";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

const InputBox: React.FC = () => {
  const { user } = useAuth(),
    inputRef = useRef<HTMLInputElement>(null),
    filePickerRef = useRef<HTMLInputElement>(null),
    [imageToPost, setImageToPost] = useState<string | null>(null);

  // Send Post
  const sendPost = async (e: FormEvent) => {
    e.preventDefault();

    if (!inputRef.current!.value) return;

    try {
      await addDoc(collection(db, "posts"), {
        message: inputRef.current!.value,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        timestamp: serverTimestamp(),
      });

      inputRef.current!.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  // Add Image to Post
  const addImageToPost = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files![0]) {
      reader.readAsDataURL(e.target.files![0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target!.result as string);
    };
  };

  // Set image state back to null
  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <img
          className='rounded-full'
          src={user.photoURL}
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

        {imageToPost && (
          <div
            onClick={removeImage}
            className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'
          >
            <img className='h-10 object-contain' src={imageToPost} alt='post' />
            <p className='text-xs text-red-500 text-center'>Remove</p>
          </div>
        )}
      </div>

      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div
          className='inputIcon'
          onClick={() => filePickerRef.current?.click()}
        >
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input
            onChange={addImageToPost}
            ref={filePickerRef}
            type='file'
            hidden
          />
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
