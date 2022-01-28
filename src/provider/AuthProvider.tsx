import { useEffect, useReducer } from "react";
import { AuthContext, Context, initialState } from "../context/AuthContext";
import { checkFirebaseUser } from "../helpers";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import { auth, db } from "../firebase.setup";
import { doc, DocumentData, getDoc, updateDoc } from "firebase/firestore";

const ACTIONS = {
  SETUSER: "SETUSER",
  GETUSER: "GETUSER",
  SETLOADING: "SETLOADING",
  SETPHOTOURL: "SETPHOTOURL",
  SETDARKMODE: "SETDARKMODE",
  DARKMODETOGGLE: "DARKMODETOGGLE",
};

interface Action {
  type: string;
  payload: any;
}

const reducer = (state: Context, action: Action): Context => {
  switch (action.type) {
    case ACTIONS.SETUSER:
      return {
        ...state,
        user: action.payload
      }
    case ACTIONS.SETLOADING:
      return {
        ...state,
        loading: action.payload
      }
    case ACTIONS.SETPHOTOURL:
      return {
        ...state,
        photoURL: action.payload
      }
    case ACTIONS.DARKMODETOGGLE:
      return {
        ...state,
        darkModeEnabled: action.payload,
      };
    case ACTIONS.SETDARKMODE:
      return {
        ...state,
        darkModeEnabled: action.payload,
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    () =>
      auth.onAuthStateChanged((firebaseUser) => {
        dispatch({ type: ACTIONS.SETUSER, payload: firebaseUser })
        dispatch({ type: ACTIONS.SETLOADING, payload: false })
      }),
    []
  );

  useEffect(() => {
    dispatch({ type: ACTIONS.SETLOADING, payload: true });
    const getProfile = async (): Promise<void> => {
      const docRef = doc(db, "users", state.user?.uid!),
        docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch({ type: ACTIONS.SETPHOTOURL, payload: docSnap.data().photoURL })
        dispatch({ type: ACTIONS.SETDARKMODE, payload: docSnap.data().darkModeEnabled })
        dispatch({ type: ACTIONS.SETLOADING, payload: false })
      }
    };
    state.user && getProfile();
  }, [state.user]);

  // Facebook sign in
  const signInWithFacebook = async (): Promise<void> => {
    dispatch({ type: ACTIONS.SETLOADING, payload: true })
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
      userDoc && dispatch({ type: ACTIONS.SETPHOTOURL, payload: userDoc.photoURL })
    } catch (error) {
      console.error(error);
    }
  };

  // Logout
  const logOut = async () => {
    const auth = getAuth();

    return await signOut(auth);
  };

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
      dispatch({ type: ACTIONS.DARKMODETOGGLE, payload: docSnap.data().darkModeEnabled });
  };

  const value = {
    ...state,
    darkModeToggle,
    signInWithFacebook,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!state.loading && children}
    </AuthContext.Provider>
  );
};
