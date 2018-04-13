import React, { Component } from "react";
import { Container, Header, Left, Right, Title, Body, Content, Item, Input, Button, Text, Form, Label } from "native-base";
import MovieCard from "../common/MovieCard";

export default class Search extends Component {
  render() {
    return <Container>
        <Header>
          <Left />
          <Body>
            <Title>Movie Search</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Title</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Release Year</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Genre</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Cast</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Rating</Label>
              <Input />
            </Item>
            <Button full>
              <Text>Search</Text>
            </Button>
          </Form>
        </Content>
      </Container>;
  }
}
