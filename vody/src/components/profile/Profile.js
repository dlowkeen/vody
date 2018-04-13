import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Right,
  Title,
  Body,
  Content
} from "native-base";

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        </Content>
      </Container>
    );
  }
}
