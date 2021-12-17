import {
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { db, storage } from "./firebase.setup";

interface Params {
  uid: string;
  photoDataURL: string;
}

export const checkFirebaseUser = async (
  params: Params
): Promise<void | DocumentData> => {
  const { uid, photoDataURL } = params,
    getSnap = async (): Promise<DocumentSnapshot<DocumentData> | void> => {
      try {
        const docRef = doc(db, "users", uid);

        return await getDoc(docRef);
      } catch (error) {
        console.log(error);
      }
    };

  try {
    let docSnap = await getSnap();

    if (docSnap?.exists()) return docSnap.data();

    const userRef = doc(db, "users", uid);

    await setDoc(userRef, { user: uid });

    const storageRef = ref(storage, `users/${userRef.id}`);

    await uploadString(storageRef, photoDataURL, "data_url");

    const url = await getDownloadURL(storageRef);

    await setDoc(userRef, { photoURL: url }, { merge: true });

    docSnap = await getSnap();

    if (docSnap?.exists()) return docSnap.data();
  } catch (error) {
    console.log(error);
  }
};

export const filterReactionsByType = (
  reactions: DocumentData[],
  reactionType: string
): DocumentData[] =>
  reactions.filter((reaction) => reaction.data().reactionType === reactionType);
