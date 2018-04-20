import React, { Component } from "react";
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Spinner, Content } from 'native-base';
import axios from 'axios';
import keys from '../../config/keys';
import MovieCard from "../common/MovieCard";
// import MovieInfoModal from '../common/MovieInfoModal';

class Home extends Component {
  componentWillMount() {
    let queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + keys.MoviesDBKey + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    axios.get(queryURL).then(response => {
      let movie = response.data;
      this.setState({ movie: movie });
    });
  }

  renderContent() {
    const movie = this.state ? this.state.movie.results : null;
    let moviePath = "https://image.tmdb.org/t/p/w500/"
    if (this.state) {
      const movieList = movie.map(movie=> {
        return <Container key={movie.id}>
            <MovieCard 
              Poster={moviePath + movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              overview={movie.overview}
              // modalButton={<MovieInfoModal />}
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
    const { textStyle, viewStyle } = styles;
    return <ScrollView style={{ backgroundColor: "#DCDCDC" }}>
        <View style={viewStyle}>
          <Text style={textStyle}>Trending Movies</Text>
        </View>
        {this.renderContent()}
      </ScrollView>;
  }
}

const styles = {
  viewStyle: {
    justifyContent: "center",
    backgroundColor: "#ffffff",
    alignItems: "center",
    height: 62,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    color: 'black',
    fontSize: 17
  }
};

export default Home;