import { NavigationActions } from "react-navigation";
import { LOGIN, LOGOUT } from "../actions/types";

const INITIAL = {
  loggedIn: false,
  user: null
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case LOGIN:
    console.log("action.payload", action);
    console.log("this.props", this.props);
    console.log("NavigationActions", NavigationActions);
    NavigationActions.navigate('TabNavigation');
    return { loggedIn: true, user: action.payload };
      break;
    case LOGOUT:
      return INITIAL;
    default:
      return state;
  }
};
