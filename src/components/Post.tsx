import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase.setup";
import CommentInput from "./CommentInput";
import Comments from "./Comments";
import ReactionCommentCount from "./ReactionCommentCount";
import PostButtons from "./PostButtons";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import Reactions from "./Reactions";
import { useAuth } from "../context/AuthContext";

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
    { user } = useAuth(),
    { name, image, postImage, timestamp, message }: PostData = post.data(),
    [showComments, setShowComments] = useState<boolean>(false),
    [reactions, setReactions] = useState<DocumentData[]>([]),
    [comments, setComments] = useState<DocumentData[]>([]),
    [likeButtonHover, setLikeButtonHover] = useState<boolean>(false),
    [userLikedPost, setUserLikedPost] = useState<boolean>(false);

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

  useEffect(
    () =>
      onSnapshot(
        collection(db, "posts", id, "reactions"),
        (snapshot: DocumentData) => {
          setUserLikedPost(false);
          snapshot.docs.forEach((reaction: DocumentData) => {
            if (reaction.data().uid === user?.uid) setUserLikedPost(true);
          });
          setReactions(snapshot.docs);
        }
      ),
    [id, user?.uid]
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

  const addReaction = async (reactionType: string = ''): Promise<void> => {
    likeButtonLeave();

    const docRef = doc(db, "posts", id, "reactions", user!.uid),
      docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const reaction = docSnap.data();

      return (reaction.reactionType === reactionType) || !reactionType
        ? await deleteDoc(docRef)
        : await updateDoc(docRef, { reactionType: reactionType });
    }

    return await setDoc(doc(db, "posts", id, "reactions", user!.uid), {
      uid: user!.uid,
      displayName: user!.displayName,
      reactionType: reactionType || 'like',
    });
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
        {(comments.length > 0 || reactions.length > 0) && (
          <ReactionCommentCount
            reactions={reactions}
            commentCount={comments.length}
            toggleComments={toggleComments}
          />
        )}

        <Reactions
          addReaction={addReaction}
          likeButtonHover={likeButtonHover}
          likeButtonEnter={likeButtonEnter}
          likeButtonLeave={likeButtonLeave}
        />

        <PostButtons
          addReaction={addReaction}
          userLikedPost={userLikedPost}
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
