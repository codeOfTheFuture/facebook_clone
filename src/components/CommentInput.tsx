import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { CameraIcon } from "@heroicons/react/outline";
import { useAuth } from "../context/AuthContext";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase.setup";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

interface CommentInputProps {
  postId: string;
}

const CommentInput: React.FC<CommentInputProps> = (props) => {
  const { user, photoURL } = useAuth(),
    { postId } = props,
    filePickerRef = useRef<HTMLInputElement>(null),
    [imageToComment, setImageToComment] = useState<string | null>(null),
    [comment, setComment] = useState("");

  const addImageToComment = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files![0]) {
      reader.readAsDataURL(e.target.files![0]);
    }

    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
      setImageToComment(readerEvent.target!.result as string);
    };
  };

  const removeImage = () => {
    setImageToComment(null);
  };

  const sendComment = async (e: FormEvent) => {
    e.preventDefault();
    if (!comment && !imageToComment) return;

    try {
      const newDoc = await addDoc(collection(db, "posts", postId, "comments"), {
        comment: comment,
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        timestamp: serverTimestamp(),
      });

      if (imageToComment) {
        const storageRef = ref(
          storage,
          `posts/${postId}/comments/${newDoc.id}`
        );

        await uploadString(storageRef, imageToComment, "data_url");

        const url = await getDownloadURL(storageRef),
          commentsRef = doc(db, "posts", postId, "comments", newDoc.id);

        await setDoc(
          commentsRef,
          {
            commentImage: url,
          },
          { merge: true }
        );
      }
    } catch (error) {
      console.error(error);
    }

    setComment("");
    removeImage();
  };

  return (
    <div className='flex items-center w-full p-4 rounded-b-2xl bg-white shadow-md dark:bg-gray-700'>
      <img
        src={photoURL}
        className='w-7 h-7 rounded-full mr-2'
        alt='User profile'
      />
      <form
        className='flex items-center w-full rounded-2xl p-1 bg-gray-100 dark:bg-gray-500'
        onSubmit={sendComment}
      >
        <input
          className='inline-flex flex-shrink items-center mx-2 w-full outline-none bg-transparent placeholder-gray-500 dark:placeholder-gray-200'
          type='text'
          placeholder='Write a comment...'
          value={comment}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setComment(e.target.value)
          }
        />
        <CameraIcon
          className='h-6 mr-2 text-gray-400 rounded-full hover:bg-gray-300 cursor-pointer dark:text-gray-200'
          onClick={() => filePickerRef.current?.click()}
        />
        <input
          type='file'
          hidden
          ref={filePickerRef}
          onChange={addImageToComment}
        />
        {imageToComment && (
          <div className='flex h-6 cursor-pointer mr-2' onClick={removeImage}>
            <img src={imageToComment} alt='Comment' className='object-cover' />
          </div>
        )}
      </form>
    </div>
  );
};

export default CommentInput;
