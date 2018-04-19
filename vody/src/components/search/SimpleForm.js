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
const validate = values => {
  const error = {};
  error.email = "";
  error.name = "";
  var ema = values.email;
  var nm = values.name;
  if (values.email === undefined) {
    ema = "";
  }
  if (values.name === undefined) {
    nm = "";
  }
  if (ema.length < 8 && ema !== "") {
    error.email = "too short";
  }
  if (!ema.includes("@") && ema !== "") {
    error.email = "@ not included";
  }
  if (nm.length > 8) {
    error.name = "max 8 characters";
  }
  return error;
};

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
    return (
      <Container>
        <Header>
          <Body>
            <Title>Movie Search</Title>
          </Body>
        </Header>
        <Content padder>
          {this.renderForm()}
          <Button block primary onPress={handleSubmit(this.onSearchSubmit)}>
            <Text>Submit</Text>
          </Button>
          <Button block primary onPress={reset}>
            <Text>Clear</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

SimpleForm = reduxForm({
  form: "test",
  validate
})(SimpleForm);

export default connect(mapStateToProps, actions)(SimpleForm);
