import { FETCH_HOME_MOVIE_DATA } from "../actions/types";

const INITIAL_STATE = {
  home: null
};

export default (state = INITIAL_STATE, action) => {
  console.log("home reducer!");
  switch (action.type) {
    case FETCH_HOME_MOVIE_DATA:
      return { ...state, home: action.payload };
    default:
      return state;
  }
};
