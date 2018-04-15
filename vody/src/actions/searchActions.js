import { FETCH_MOVIE_DATA } from "./types";

export const fetchMovieData = data => (
  {
    type: FETCH_MOVIE_DATA,
    payload: data
  }
)

