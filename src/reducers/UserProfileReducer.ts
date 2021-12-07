import { DocumentData } from "firebase/firestore";

const ACTIONS = { GETUSER: "GETUSER", DARKMODETOGGLE: "DARKMODETOGGLE" };

interface State {
  darkModeEnabled: boolean;
}

interface Action {
  type: string;
  payload: DocumentData;
}

const userProfileReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.DARKMODETOGGLE:
      return {
        ...state,
        darkModeEnabled: action.payload.darkModeEnabled,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
