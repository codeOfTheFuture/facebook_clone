import { useEffect, useState, useMemo } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase.setup";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  const memoedValue = useMemo(() => ({ user }), [user]);

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};
