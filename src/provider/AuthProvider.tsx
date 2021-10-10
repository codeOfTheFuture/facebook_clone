import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.setup";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Facebook sign in
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider(),
      auth = getAuth();

    return signInWithPopup(auth, provider);
  };

  // Logout
  const logOut = () => {
    const auth = getAuth();

    return signOut(auth);
  };

  const value = {
    user,
    signInWithFacebook,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
