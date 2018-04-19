import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Title,
  Body,
  Content, 
  Card,
  CardItem
} from "native-base";
const dummyData = ["The King And I", "The Last Samurai", "The Avengers", "Cleopatra", "Tomb Raider"];

class Profile extends Component {
  
  renderDummyData() {
    let DummyData = dummyData.map(DummyData => {
      return (
        <CardItem bordered>
          <Text>{DummyData}</Text>
          <Right>
            <Text>Read More</Text>
          </Right>
        </CardItem>
      );
    })
    return DummyData;
  }
  
  render() {
    return <Container>
        <Header>
          <Left />
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.userContainer}>
            <Image source={require("../../assets/images/profile-pic.jpeg")} style={styles.userImage} />
            <Text style={styles.userText}>Member since: July 2016</Text>
          </View>
          <View>
            <Card>
              <CardItem>
                <Text style={styles.MoviesHeader}>Favorite Movies</Text>
              </CardItem>
            </Card>
          </View>
          <Card>
            <ScrollView>
            {this.renderDummyData()}
            </ScrollView>
          </Card>
        </Content>
      </Container>;
  }
}

const styles = StyleSheet.create({
  userContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  userImage: {
    marginTop: 20,
    width: 120,
    height: 120,
    borderRadius: 60
  },
  MoviesHeader: {
    fontSize: 18,
    fontWeight: "bold",
    textShadowRadius: 2,
    textAlign: "center"
  }
});

export default Profile;