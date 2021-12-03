import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../firebase.setup";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null),
    [photoDataURL, setPhotoDataURL] = useState<string>(""),
    [loading, setLoading] = useState<boolean>(true);

  useEffect(
    () =>
      auth.onAuthStateChanged((firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      }),
    []
  );

  // Facebook sign in
  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider(),
      auth = getAuth();

    try {
      const result = await signInWithPopup(auth, provider),
        credential = FacebookAuthProvider.credentialFromResult(result),
        accessToken = credential?.accessToken,
        endpoint = `https://graph.facebook.com/me?fields=picture.type(large)&access_token=${accessToken}`,
        data = await fetch(endpoint),
        response = await data.json(),
        photoURL: string = response.picture.data.url,
        blob = await fetch(photoURL).then((r) => r.blob()),
        dataURL: string = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      setPhotoDataURL(dataURL);
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
    photoDataURL,
    signInWithFacebook,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
