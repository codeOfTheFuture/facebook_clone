import { User } from "firebase/auth";
import React, { useContext } from "react";

export interface Context {
  user: User | null;
  photoURL: string;
  signInWithFacebook: () => Promise<void>;
  logOut: () => Promise<void>;
}

const initialState = {
  user: null,
  photoURL: "",
  signInWithFacebook: async () => {},
  logOut: async () => {},
};

export const AuthContext = React.createContext<Context>(initialState);

export const useAuth = (): Context => useContext(AuthContext);
