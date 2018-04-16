import { FETCH_MOVIE_DATA } from "../actions/types";

const INITIAL_STATE = {
    movie: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DATA:
      return { ...state, movie: action.payload };
    default:
      return state;
  }
};
