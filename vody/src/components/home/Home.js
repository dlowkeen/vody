import React, { Component } from "react";
import { Text, View, Image } from 'react-native';
import { Container } from 'native-base';
import axios from 'axios';
import MovieCard from "../common/MovieCard";

export default class Home extends Component {
  
  componentWillMount() {
    // To do: remove and store in prod config variables 
    let APIKey = "718190bc3e37096f5f6a3adfdeb9abaa";
    // let queryURL = "https://www.omdbapi.com/?t=" + title + "&y=" + year + "&plot=short&apikey=40e9cece";
    let queryURL = "https://api.themoviedb.org/3/movie/76341?api_key=" + APIKey;
    axios.get(queryURL).then(response => {
      let movie = response.data;
      this.setState({
        movie: movie
      });
    });
  }

  renderContent() {
    const movie = this.state ? this.state.movie : null;
    console.log(movie);
    let moviePath;
    if (movie) {
      moviePath = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    }
    console.log(moviePath);
    if (this.state) {
      return <Container>
          <MovieCard 
            Poster={moviePath}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            overview={movie.overview}
          />
        </Container>;
      } 
  }

  render() {
    return (
      <Container>
        {this.renderContent()}
      </Container>
    );
  }
}
