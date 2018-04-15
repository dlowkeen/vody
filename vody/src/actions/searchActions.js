import axios from "axios";
import { FETCH_MOVIE_DATA } from "./types";

export const fetchMovieData = data => async dispatch => {
  console.log("ACTION!");
  // const res = await axios.get("/api/company", data);

  // // To do: remove and store in prod config variables 
  // let APIKey = "718190bc3e37096f5f6a3adfdeb9abaa";
  // let movieID = "71543";
  // let queryURL = "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=" + APIKey + "&language=en-US"

  // axios.get(queryURL).then(response => {
  //   console.log(response.data);
  //   dispatch({ type: FETCH_MOVIE_DATA, payload: res.data });
  // });

};