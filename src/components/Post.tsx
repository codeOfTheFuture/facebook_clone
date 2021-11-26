import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase.setup";
import CommentInput from "./CommentInput";
import Comments from "./Comments";
import LikeCommentCount from "./LikeCommentCount";
import PostButtons from "./PostButtons";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

interface PostProps {
  post: DocumentData;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { id } = post,
    { name, image, postImage, timestamp, message } = post.data(),
    [showComments, setShowComments] = useState(false),
    [comments, setComments] = useState<DocumentData[]>([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot: DocumentData) => {
          setComments(snapshot.docs);
          setShowComments(true);
        }
      ),
    [id]
  );

  const toggleComments = () => {
    setShowComments((prevState) => !prevState);
  };

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

      {comments.length > 0 && (
        <LikeCommentCount
          commentCount={comments.length}
          toggleComments={toggleComments}
        />
      )}

      <PostButtons
        showComments={showComments}
        toggleComments={toggleComments}
      />

      {showComments && (
        <div className='flex flex-col'>
          <hr />
          <Comments comments={comments} />
          <CommentInput postId={id} />
        </div>
      )}
    </div>
  );
};

export default Post;
