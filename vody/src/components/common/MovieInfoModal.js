import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View } from "react-native";
import { Button, Card, CardItem, Body, Thumbnail, Left } from 'native-base';
import { connect } from 'react-redux';

class MovieInfoModal extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderContent() {
    // console.log('this.props.search.test', this.props.search.test);
    if (this.props.movie.movie.results) {
      const movie = this.props.movie.movie.results[0];
      let moviePath = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
        return (
        <View>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: moviePath }} />
                <Body>
                  <Text style={{ fontSize: 22, paddingBottom: 12 }}>{movie.title}</Text>
                  <Text>{movie.overview}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </View>
        );
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
    console.log("this.state", this.state);
    console.log('this.props', this.props);
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              {this.renderContent()}

              <Button small info
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Go Back</Text>
              </Button>
            </View>
          </View>
        </Modal>

        <Button
          small
          primary
          style={{ paddingLeft: 15, paddingRight: 15 }}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Learn More</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  movie: state.movie
});

export default connect(mapStateToProps)(MovieInfoModal);
