import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import MovieInfoModal from './MovieInfoModal';

const MovieCard = (props) => {
    return <Container>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image source={{ uri: props.Poster }} style={{ height: 600, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                {props.modalButton}
              </Left>
              <Right>
                <Text>Avg Score: {props.vote_average}</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>;
}

export default MovieCard;