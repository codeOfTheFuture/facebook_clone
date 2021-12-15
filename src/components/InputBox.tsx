import React, { FormEvent, ChangeEvent, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  collection,
  doc,
  addDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.setup";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

const InputBox: React.FC = () => {
  const { user, photoURL } = useAuth(),
    storage = getStorage(),
    inputRef = useRef<HTMLInputElement>(null),
    filePickerRef = useRef<HTMLInputElement>(null),
    [imageToPost, setImageToPost] = useState<string | null>(null);

  const removeImage = (): void => {
    setImageToPost(null);
  };

  // Send Post
  const sendPost = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (!inputRef.current!.value) return;

    try {
      const newDoc = await addDoc(collection(db, "posts"), {
        message: inputRef.current!.value,
        name: user?.displayName,
        email: user?.email,
        image: photoURL,
        timestamp: serverTimestamp(),
      });

      if (imageToPost) {
        const storageRef = ref(storage, `posts/${newDoc.id}`);
        await uploadString(storageRef, imageToPost, "data_url");
        const url = await getDownloadURL(storageRef);
        const postsRef = doc(db, "posts", newDoc.id);

        await setDoc(
          postsRef,
          {
            postImage: url,
          },
          { merge: true }
        );
      }
    } catch (error) {
      console.log(error);
    }

    inputRef.current!.value = "";
    removeImage();
  };

  // Add Image to Post
  const addImageToPost = (e: ChangeEvent<HTMLInputElement>): void => {
    const reader = new FileReader();
    if (e.target.files![0]) {
      reader.readAsDataURL(e.target.files![0]);
    }

    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
      setImageToPost(readerEvent.target!.result as string);
    };
  };

  return (
    <form onSubmit={sendPost} className='w-full'>
      <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 dark:bg-gray-700'>
        <div className='flex space-x-4 p-4 items-center'>
          {photoURL && (
            <img
              className='rounded-full'
              src={photoURL}
              alt='profile'
              width={40}
              height={40}
            />
          )}
          <div className='flex flex-1'>
            <input
              className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none dark:bg-gray-600 dark:placeholder-gray-200 dark:text-gray-200'
              type='text'
              ref={inputRef}
              placeholder={`What's on your mind, ${user?.displayName?.split(" ")[0]
                }?`}
            />
          </div>

          {imageToPost && (
            <div
              onClick={removeImage}
              className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'
            >
              <img
                className='h-10 object-contain'
                src={imageToPost}
                alt='post'
              />
              <p className='text-xs text-red-500 text-center'>Remove</p>
            </div>
          )}
        </div>

        <div className='flex justify-evenly p-3 border-t'>
          <div className='inputIcon'>
            <VideoCameraIcon className='h-7 text-red-500' />
            <p className='text-xs sm:text-sm xl:text-base dark:text-gray-200'>
              Live Video
            </p>
          </div>
          <div
            className='inputIcon'
            onClick={() => filePickerRef.current?.click()}
          >
            <CameraIcon className='h-7 text-green-400' />
            <p className='text-xs sm:text-sm xl:text-base dark:text-gray-200'>
              Photo/Video
            </p>
            <input
              onChange={addImageToPost}
              ref={filePickerRef}
              type='file'
              hidden
            />
          </div>
          <div className='inputIcon hidden sm:flex'>
            <EmojiHappyIcon className='h-7 text-yellow-300' />
            <p className='text-xs sm:text-sm xl:text-base dark:text-gray-200'>
              Feeling/Activity
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputBox;
