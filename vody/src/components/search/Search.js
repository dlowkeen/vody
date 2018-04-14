import React, { Component } from "react";
import { Container, Header, Left, Right, Title, Body, Content, Item, Input, Button, Text, Form, Label } from "native-base";
import SearchForm from './SearchForm';
import SimpleForm from './SimpleForm';

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
        {/* <SearchForm /> */}
        <SimpleForm />
      </Container>;
  }
}
