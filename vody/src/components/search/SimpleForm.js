import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import axios from 'axios';
import * as actions from "../../actions";
import {
  Container,
  Item,
  Input,
  Header,
  Body,
  Content,
  Title,
  Button,
  Text
} from "native-base";
import {
  required,
  maxLength25,
  minLength2,
  renderField
} from "./formValidation.js";
import SearchFields from "./SearchFields";
import { Field, reduxForm } from "redux-form";

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null
    };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit() {
    this.props.fetchMovieData();
    this.props.navigation.navigate("SearchResults");
  }

  renderForm() {
    const searchField = SearchFields.map(SearchField => {
      return (
        <Field
          key={SearchField.name}
          name={SearchField.name}
          type={SearchField.type}
          component={renderInput}
          label={SearchField.label}
        />
      );
    });
    return searchField;
  }

  render() {
    const { handleSubmit, reset } = this.props;
    return <Container>
        <Header>
          <Body>
            <Title>Movie Search</Title>
          </Body>
        </Header>
        <Content padder>
          {this.renderForm()}
          <Button block primary style={{ margin: 5 }} onPress={handleSubmit(this.onSearchSubmit)}>
            <Text>Submit</Text>
          </Button>
          <Button block primary style={{ margin: 5 }} onPress={reset}>
            <Text>Clear</Text>
          </Button>
        </Content>
      </Container>;
  }
}

const mapStateToProps = state => ({
  search: state.search
});

SimpleForm = reduxForm({
  form: "test"
})(SimpleForm);

export default connect(mapStateToProps, actions)(SimpleForm);
