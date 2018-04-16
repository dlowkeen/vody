import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View } from "react-native";
import { Button } from 'native-base';
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
    if (this.props.search.test.values) {
        return (
        <View>
            <Text>{this.props.search.test.values.title}</Text>
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
    console.log('this.state', this.state);
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
              <Text>Hello {this.renderContent()}!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Close Modal</Text>
              </TouchableHighlight>
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
  search: state.search
});

export default connect(mapStateToProps)(MovieInfoModal);
