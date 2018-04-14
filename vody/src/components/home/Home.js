import React, { Component } from "react";
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Spinner, Content } from 'native-base';
import axios from 'axios';
import MovieCard from "../common/MovieCard";

export default class Home extends Component {
  
  componentWillMount() {
    // To do: remove and store in prod config variables 
    let APIKey = "718190bc3e37096f5f6a3adfdeb9abaa";
    let queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + APIKey + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    axios.get(queryURL).then(response => {
      let movie = response.data;
      this.setState({
        movie: movie
      });
    });
  }

  renderContent() {
    const movie = this.state ? this.state.movie.results : null;
    console.log(movie);
    let moviePath = "https://image.tmdb.org/t/p/w500/"
    if (this.state) {
      const movieList = movie.map(movie=> {
        console.log(movie);
        return <Container>
            <MovieCard 
              key={movie.id}
              Poster={moviePath + movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          </Container>;
      });
      return movieList;
    } else {
      return <Container>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Spinner color="blue" />
            <Text>
              Loading...
            </Text>
          </View>
        </Container>;
    }
  }

  render() {
    return (
      <ScrollView>
        {this.renderContent()}
      </ScrollView>
    );
  }
}
