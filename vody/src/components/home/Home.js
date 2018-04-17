import React, { Component } from "react";
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Spinner, Content } from 'native-base';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import keys from '../../config/keys';
import MovieCard from "../common/MovieCard";
import MovieInfoModal from '../common/MovieInfoModal';

class Home extends Component {
  
  componentWillMount() {
    let queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + keys.MoviesDBKey + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    axios.get(queryURL).then(response => {
      let movie = response.data;
      this.props.fetchHomeMovieData(movie);
      this.setState({
        home: movie
      });
    });
  }

  renderContent() {
    const movie = this.state ? this.state.movie.results : null;
    let moviePath = "https://image.tmdb.org/t/p/w500/"
    if (this.state) {
      const movieList = movie.map(movie=> {
        return <Container>
            <MovieCard 
              key={movie.id}
              Poster={moviePath + movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              overview={movie.overview}
              modalButton={<MovieInfoModal />}
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
    console.log("this.props", this.props);
    return (
      <ScrollView>
        {this.renderContent()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home
});

export default connect(mapStateToProps, actions)(Home);
