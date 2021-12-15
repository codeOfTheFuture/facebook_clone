import { deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase.setup";
import Reaction from "./Reaction";

interface ReactionsProps {
  postId: string;
  likeButtonHover: boolean;
  likeButtonEnter: () => void;
  likeButtonLeave: () => void;
}

const Reactions: React.FC<ReactionsProps> = (props) => {
  const { postId, likeButtonHover, likeButtonEnter, likeButtonLeave } = props,
    { user } = useAuth();

  const addReaction = async (
    reactionType: string,
  ): Promise<void> => {
    const docRef = doc(db, "posts", postId, "reactions", user!.uid),
      docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const reaction = docSnap.data();

      return reaction.reactionType === reactionType
        ? await deleteDoc(docRef)
        : await updateDoc(docRef, { reactionType: reactionType });
    }

    return await setDoc(doc(db, "posts", postId, "reactions", user!.uid), {
      displayName: user!.displayName,
      reactionType: reactionType,
    });
  };

  return (
    <div
      className={`flex items-center absolute transform translate-y-0 opacity-0 bottom-0 left-0 bg-white dark:bg-gray-600 rounded-2xl border transition-transform ease-out duration-500 ${likeButtonHover && "transform -translate-y-10 opacity-100"
        }`}
      onMouseEnter={() => likeButtonEnter()}
      onMouseLeave={() => likeButtonLeave()}
    >
      <Reaction
        reaction='/images/reactions/like.gif'
        reactionType='like'
        addReaction={addReaction}
      />
      <Reaction
        reaction='/images/reactions/heart.gif'
        reactionType='heart'
        addReaction={addReaction}
      />
      <Reaction
        reaction='/images/reactions/haha.gif'
        reactionType='haha'
        addReaction={addReaction}
      />
      <Reaction
        reaction='/images/reactions/wow.gif'
        reactionType='wow'
        addReaction={addReaction}
      />
      <Reaction
        reaction='/images/reactions/sad.gif'
        reactionType='sad'
        addReaction={addReaction}
      />
      <Reaction
        reaction='/images/reactions/angry.gif'
        reactionType='angry'
        addReaction={addReaction}
      />
    </div>
  );
};

export default Reactions;
