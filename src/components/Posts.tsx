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

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot: DocumentData) => {
      setPosts(snapshot.docs);
    });
    return unsubscribe;
  }, []);

  return (
    <div className='w-full mx-1 sm:w-3/4 sm:mx-0'>
      {posts?.map((post: DocumentData) => {
        return (
          <Post
            key={post.id}
            name={post.data().name}
            message={post.data().message}
            email={post.data().email}
            timestamp={new Date(
              post.data().timestamp?.toDate()
            ).toLocaleString()}
            image={post.data().image}
            postImage={post.data().postImage}
          />
        );
      })}
    </div>
  );
};

export default Posts;
