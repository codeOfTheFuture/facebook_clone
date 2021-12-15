import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { checkFirebaseUser } from "../helpers";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import { auth, db } from "../firebase.setup";
import { doc, getDoc } from "firebase/firestore";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null),
    [loading, setLoading] = useState<boolean>(true),
    [photoURL, setPhotoURL] = useState<string>("");

  useEffect(
    () =>
      auth.onAuthStateChanged((firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      }),
    []
  );

  useEffect(() => {
    const getProfile = async (): Promise<void> => {
      const docRef = doc(db, "users", user?.uid!),
        docSnap = await getDoc(docRef);
      if (docSnap.exists()) setPhotoURL(docSnap.data().photoURL);
    };
    user && getProfile();
  }, [user]);

  // Facebook sign in
  const signInWithFacebook = async (): Promise<void> => {
    const provider = new FacebookAuthProvider(),
      auth = getAuth(),
      userProfile = {
        uid: "",
        photoURL: "",
      };

    try {
      const result = await signInWithPopup(auth, provider),
        credential = FacebookAuthProvider.credentialFromResult(result),
        accessToken = credential?.accessToken,
        endpoint = `https://graph.facebook.com/me?fields=picture.type(large)&access_token=${accessToken}`,
        data = await fetch(endpoint),
        response: { picture: { data: { url: string } } } = await data.json(),
        photoURL: string = response.picture.data.url,
        blob = await fetch(photoURL).then((r) => r.blob()),
        dataURL: string = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });

      userProfile.uid = result.user.uid;
      userProfile.photoURL = dataURL;
    } catch (error) {
      console.error(error);
    }

    try {
      const userDoc = await checkFirebaseUser({
        uid: userProfile.uid,
        photoDataURL: userProfile.photoURL,
      });
      userDoc && setPhotoURL(userDoc.photoURL);
    } catch (error) {
      console.error(error);
    }
  };

  // Logout
  const logOut = () => {
    const auth = getAuth();

    return signOut(auth);
  };

  const value = {
    user,
    photoURL,
    signInWithFacebook,
    logOut,
  };

  // console.log(photoURL);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
