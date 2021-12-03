import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { db, storage } from "./firebase.setup";

export const checkFirebaseUser = async (uid: string, photoDataURL: string) => {
  const docRef = doc(db, "users", uid),
    docSnap = await getDoc(docRef);

  if (docSnap.exists()) return;

  const userRef = doc(db, "users", uid);

  await setDoc(userRef, { user: uid });

  const storageRef = ref(storage, `users/${userRef.id}`);

  await uploadString(storageRef, photoDataURL, "data_url");

  const url = await getDownloadURL(storageRef);

  console.log(url);
  await setDoc(userRef, { photoURL: url }, { merge: true });
};
