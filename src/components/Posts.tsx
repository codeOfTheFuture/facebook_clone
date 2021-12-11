import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase.setup";
import Post from "./Post";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<DocumentData[]>([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot: DocumentData) => setPosts(snapshot.docs)
      ),
    []
  );

  return (
    <div className='w-3/4 sm:w-full mx-1 sm:mx-0'>
      {posts?.map((post: DocumentData) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
