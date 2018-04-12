import React, { Component } from "react";
import { Text, View } from 'react-native';
import axios from 'axios';

export default class Home extends Component {
  
  componentWillMount() {
    let title = "space+jam";
    let queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=40e9cece";
    axios.get(queryURL).then(response => {
      console.log("response", response);
      let movie = response.data;
      this.setState({
        movie: movie
      });
    });
  }

  renderContent() {
    if (this.state.movie) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>{movie}</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>Sorry</Text>
        </View>
      );
    }
  }

  render() {
    const movie = this.state.movie ? this.state.movie.title : null;
    console.log(this.state);
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}
