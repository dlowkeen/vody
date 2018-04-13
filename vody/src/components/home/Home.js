import React, { Component } from "react";
import { Text, View, Image } from 'react-native';
import { Container } from 'native-base';
import axios from 'axios';
import MovieCard from "../common/MovieCard";

export default class Home extends Component {
  
  componentWillMount() {
    let title = "space+jam";
    let queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece";
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
    if (this.state) {
      return <Container>
          <Text>{movie.Title}</Text>
          <MovieCard 
            Title={movie.Title} 
            Genre={movie.Genre} 
            Poster={movie.Poster}
            Year={movie.Year}
            Rated={movie.Rated}
            Plot={movie.Plot}
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
