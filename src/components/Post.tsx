import { DocumentData } from "firebase/firestore";
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import PostButtons from "./PostButtons";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

interface PostProps {
  post: DocumentData;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { name, image, postImage, timestamp, message } = post.data();
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(prevState => !prevState);
  }

  return (
    <div className='flex flex-col'>
      <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm dark:bg-gray-700 dark:text-gray-200'>
        <PostHeader
          name={name}
          image={image}
          timestamp={new Date(timestamp?.toDate()).toLocaleString()}
        />

        <p className='pt-4'>{message}</p>
      </div>

      {postImage && <PostImage postImage={postImage} />}

      <PostButtons showComments={showComments} toggleComments={toggleComments} />

      {showComments && <hr />}
      {showComments && <CommentInput />}
    </div>
  );
};

export default Post;
