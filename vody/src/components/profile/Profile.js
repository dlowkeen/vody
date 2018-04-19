import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
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

class Profile extends Component {
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