import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, ScrollView } from "react-native";
import { Container, Spinner, Content } from "native-base";
import axios from "axios";
import * as actions from '../../actions';
import keys from "../../config/keys";
import MovieCard from "../common/MovieCard";
import MovieInfoModal from '../common/MovieInfoModal';

class SearchResults extends Component {
  componentWillMount() {
    const { title, year } = this.props.search.test.values;
    let queryURL =
      "https://api.themoviedb.org/3/search/movie?api_key=" +
      keys.MoviesDBKey + "&query=" + title;
      axios.get(queryURL).then(response => {
        let movie = response.data;
        this.props.fetchMovieData(movie);
        this.setState({ movie: movie });
    });
  }

  renderContent() {
    const movie = this.state ? this.state.movie.results : null;
    let moviePath = "https://image.tmdb.org/t/p/w500/";
    if (this.state) {
      let index = -1;
      const movieList = movie.map(movie => {
        index++;
        return (
          <Container>
            <MovieCard
              key={movie.id}
              Poster={moviePath + movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              overview={movie.overview}
              modalButton={<MovieInfoModal position={index}/>}
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
  search: state.search,
  movie: state.movie
});

export default connect(mapStateToProps, actions)(SearchResults);
