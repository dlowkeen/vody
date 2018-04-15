import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, ScrollView } from "react-native";
import { Container, Spinner, Content } from "native-base";
import axios from "axios";
import MovieCard from "../common/MovieCard";

class SearchResults extends Component {
  componentWillMount() {
    const { title, year } = this.props.search.test.values;
    console.log(this.props.search);
    console.log("title", title);
    console.log("year", year);

    // To do: remove and store in prod config variables
    let APIKey = "718190bc3e37096f5f6a3adfdeb9abaa";
    let queryURL =
      "https://api.themoviedb.org/3/search/movie?api_key=" + 
      APIKey + "&query=" + title;
    axios.get(queryURL)
    .then(response => {
      console.log("Inside axios call");
      let movie = response.data;
      this.setState({
        movie: movie
      });
    });
  
  

  // let APIKey = "718190bc3e37096f5f6a3adfdeb9abaa";
  // const { title, year } = data;
  // let queryURL = "https://api.themoviedb.org/3/search/movie/?api_key=" + APIKey + "&language=en-US&query=" + title + "&page=1&include_adult=false";
  // console.log("queryURL", queryURL);
  // axios.get(queryURL).then(res => {
  //   console.log(res);
  //   dispatch({ 
  //     type: FETCH_MOVIE_DATA, 
  //     payload: res.data 
  //   });
  // }); 

  }

  renderContent() {
    const movie = this.state ? this.state.movie.results : null;
    let moviePath = "https://image.tmdb.org/t/p/w500/";
    if (this.state) {
      const movieList = movie.map(movie => {
        return (
          <Container>
            <MovieCard
              key={movie.id}
              Poster={moviePath + movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          </Container>
        );
      });
      return movieList;
    } else {
      return (
        <Container>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Spinner color="blue" />
            <Text>Loading...</Text>
          </View>
        </Container>
      );
    }
  }

  render() {
    return <ScrollView>{this.renderContent()}</ScrollView>;
  }
}

const mapStateToProps = state => ({
  search: state.search
});

export default connect(mapStateToProps)(SearchResults);
