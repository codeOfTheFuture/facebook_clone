import { createContext, useContext } from "react";

interface UserProfile {
  photoURL: string;
  getUser: (uid: string) => Promise<void>;
}

export const UserProfileContext = createContext<UserProfile>({
  photoURL: "",
  getUser: async () => {},
});

export const useUserProfile = () => useContext(UserProfileContext);
