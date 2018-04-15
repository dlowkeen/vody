import { FETCH_MOVIE_DATA } from "./types";

// export const fetchMovieData = data => dispatch => {
//   console.log("ACTION!", data);
//   dispatch({
//     type: FETCH_MOVIE_DATA,
//     payload: data
//   });
// };

export const fetchMovieData = data => (
  {
    type: FETCH_MOVIE_DATA,
    payload: data
  }
)

