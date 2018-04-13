import React, { Component } from "react";
import { Text, View } from 'react-native';
import axios from 'axios';

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
    const movie = this.state ? this.state.movie.Title : null;
    console.log(movie);
    if (this.state) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>{movie}</Text>
        </View>
      );
    } 
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.renderContent()}
        <Text>Hi</Text>
      </View>
    );
  }
}
