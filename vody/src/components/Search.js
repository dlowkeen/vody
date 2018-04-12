import React, { Component } from "react";
import { Container, Header, Content, Item, Input } from "native-base";

export default class Search extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item rounded>
            <Input placeholder="Rounded Textbox" />
          </Item>
        </Content>
      </Container>
    );
  }
}
