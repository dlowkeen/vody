import React, { Component } from "react";
import { Container, Header, Left, Right, Title, Body, Content, Item, Input, Button, Text } from "native-base";

export default class Search extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
            <Body>
              <Title>Movie Search</Title>
            </Body>
          <Right />
        </Header>
        <Content>
          <Item>
            <Input placeholder="Search Movie.." />
          </Item>
          <Button full>
            <Text>Search</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
