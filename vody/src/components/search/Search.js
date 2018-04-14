import React, { Component } from "react";
import { Container, Header, Left, Right, Title, Body, Content, Item, Input, Button, Text, Form, Label } from "native-base";
import SearchForm from './SearchForm';

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
        <SearchForm />
      </Container>;
  }
}
