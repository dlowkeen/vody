import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View } from "react-native";
import { Button, Card, CardItem, Body, Thumbnail, Left, Right } from 'native-base';
import { connect } from 'react-redux';

class MovieInfoModal extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderContent() {
    if (this.props.movie.movie.results || this.props.home) {
      const position = this.props.position;
      const movie = this.props.movie.movie.results[position];
      let moviePath = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
        return <View>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: moviePath }} />
                  <Body>
                    <Text style={{ fontSize: 28, paddingBottom: 12 }}>
                      {movie.title}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Text style={{ fontSize: 16, lineHeight: 25 }}>
                  {movie.overview}
                </Text>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>{movie.release_date}</Text>
                </Left>
                <Right>
                  <Text>Avg Score: {movie.vote_average}</Text>
                </Right>
              </CardItem>
            </Card>
          </View>;
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
    const position = this.props.position;
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

              <Button small primary
                style={{ paddingLeft: 15, paddingRight: 15 }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={{ color: '#ffffff' }}>Go Back</Text>
              </Button>
            </View>
          </View>
        </Modal>

        <Button
          small
          primary
          position={position}
          style={{ paddingLeft: 15, paddingRight: 15 }}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={{ color: '#ffffff' }} >Learn More</Text>
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
