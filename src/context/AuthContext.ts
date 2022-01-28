import { User } from "firebase/auth";
import React, { useContext } from "react";

export interface Context {
  user: User | null;
  loading: boolean;
  photoURL: string;
  darkModeEnabled: boolean;
  darkModeToggle: (uid: string, darkModeEnabled: boolean) => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  logOut: () => Promise<void>;
}

export const initialState = {
  user: null,
  loading: false,
  photoURL: "",
  darkModeEnabled: false,
  darkModeToggle: async () => {},
  signInWithFacebook: async () => {},
  logOut: async () => {},
};

export const AuthContext = React.createContext<Context>(initialState);

export const useAuth = (): Context => useContext(AuthContext);
