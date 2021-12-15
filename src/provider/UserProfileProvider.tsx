import React, { useReducer } from "react";
import { UserProfileContext } from "../context/UserProfileContext";
import { initialState } from "../context/UserProfileContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.setup";
import UserProfileReducer from "../reducers/UserProfileReducer";

export const UserProfileProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(UserProfileReducer, initialState),
    ACTIONS = { DARKMODETOGGLE: "DARKMODETOGGLE" };

  const darkModeToggle = async (
    uid: string,
    darkModeEnabled: boolean
  ): Promise<void> => {
    const userProfileRef = doc(db, "users", uid);

    await updateDoc(userProfileRef, {
      darkModeEnabled: darkModeEnabled,
    });

    const docRef = doc(db, "users", uid),
      docSnap = await getDoc(docRef);

    docSnap.exists() &&
      dispatch({ type: ACTIONS.DARKMODETOGGLE, payload: docSnap.data() });
  };

  const value = {
    darkModeEnabled: state.darkModeEnabled,
    darkModeToggle,
  };

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
};
