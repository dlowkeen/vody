import { FETCH_HOME_MOVIE_DATA } from "./types";

export const fetchHomeMovieData = data => ({
  type: FETCH_HOME_MOVIE_DATA,
  payload: data
});
