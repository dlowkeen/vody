import { FETCH_MOVIE_DATA } from "./types";

// export const fetchMovieData = data => (
//   {
//     type: FETCH_MOVIE_DATA,
//     payload: data
//   }
// )

export const fetchMovieData = data => async dispatch => {
  const { title, year } = data;
  let APIKey = "718190bc3e37096f5f6a3adfdeb9abaa";
  let queryURL =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    APIKey +
    "&query=" +
    title;
    console.log("this.state", this.state);
  console.log("this.props", this.props);
  console.log("data", data);
  console.log("queryURL", queryURL);
  // const res = await axios.get(queryURL);
  // dispatch({
  //   type: FETCH_MOVIES_DATA,
  //   payload: res.data
  // });
};