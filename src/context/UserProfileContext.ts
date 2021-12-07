import { createContext, useContext } from "react";

interface InitialState {
  darkModeEnabled: boolean;
  darkModeToggle: (uid: string, darkModeEnabled: boolean) => Promise<void>;
}

export const initialState = {
  darkModeEnabled: false,
  darkModeToggle: async () => {},
};

export const UserProfileContext = createContext<InitialState>({
  ...initialState,
});

export const useUserProfile = () => useContext(UserProfileContext);
