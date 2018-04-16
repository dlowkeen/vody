import { FETCH_MOVIE_DATA } from "./types";
import { FETCH_TEST } from './types';

export const fetchMovieData = data => (
  {
    type: FETCH_MOVIE_DATA,
    payload: data
  }
)
