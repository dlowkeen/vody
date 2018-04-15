import axios from "axios";
import { FETCH_MOVIE_DATA } from "./types";

export const fetchMovieData = data => dispatch => {
  console.log("ACTION!", data);
  // // To do: remove and store in prod config variables 
  let APIKey = "718190bc3e37096f5f6a3adfdeb9abaa";
  const { title, year } = data;
  let queryURL = "https://api.themoviedb.org/3/search/movie/?api_key=" + APIKey + "&language=en-US&query=" + title + "&page=1&include_adult=false";
  console.log("queryURL", queryURL);
  axios.get(queryURL).then(res => {
    console.log(res);
    dispatch({ 
      type: FETCH_MOVIE_DATA, 
      payload: res.data 
    });
  }); 
};