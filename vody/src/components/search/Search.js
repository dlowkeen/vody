import React, { Component } from "react";
import { Container, Header, Left, Right, Title, Body, Content, Item, Input, Button, Text, Form, Label } from "native-base";
import SimpleForm from './SimpleForm';

export default class Search extends Component {
  render() {
    console.log(this.props.navigation);
    return <Container>
        <Header>
          <Left />
          <Body>
            <Title>Movie Search</Title>
          </Body>
          <Right />
        </Header>
        <SimpleForm />
      </Container>;
  }
}
