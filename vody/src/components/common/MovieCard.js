import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const MovieCard = (props) => {
    return <Container>
        <Content>
          <Card>
            <CardItem>
                <Body>
                  <Text>{props.Title}</Text>
                  <Text note>{props.Genre}</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: props.Poster}} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Text>Year Released: {props.Year}</Text>
              </Left>
              <Right>
                <Text>Rated: {props.Rated}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text>{props.Plot}</Text>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>;
}

export default MovieCard;