import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase.setup";
import CommentInput from "./CommentInput";
import Comments from "./Comments";
import LikeCommentCount from "./LikeCommentCount";
import PostButtons from "./PostButtons";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import Reactions from "./Reactions";

interface PostProps {
  post: DocumentData;
}

interface PostData {
  name: string;
  image: string;
  postImage: string;
  timestamp: Timestamp;
  message: string;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { id } = post,
    { name, image, postImage, timestamp, message }: PostData = post.data(),
    [showComments, setShowComments] = useState<boolean>(false),
    [comments, setComments] = useState<DocumentData[]>([]),
    [likeButtonHover, setLikeButtonHover] = useState<boolean>(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot: DocumentData) => {
          setComments(snapshot.docs);
          comments.length > 0 && setShowComments(true);
        }
      ),
    [id, comments.length]
  );

  const likeButtonEnter = (): void => {
    setLikeButtonHover(true);
  };

  const likeButtonLeave = (): void => {
    setLikeButtonHover(false);
  };

  const toggleComments = (): void => {
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

      <div className='relative'>
        {comments.length > 0 && (
          <LikeCommentCount
            commentCount={comments.length}
            toggleComments={toggleComments}
          />
        )}

        <Reactions
          postId={id}
          likeButtonHover={likeButtonHover}
          likeButtonEnter={likeButtonEnter}
          likeButtonLeave={likeButtonLeave}
        />

        <PostButtons
          showComments={showComments}
          toggleComments={toggleComments}
          likeButtonEnter={likeButtonEnter}
          likeButtonLeave={likeButtonLeave}
        />
      </div>

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
