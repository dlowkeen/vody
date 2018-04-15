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
    this.renderInput = this.renderInput.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit(data) {
    this.props.fetchMovieData(data);
    this.props.navigation.navigate("SearchResults");
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError}>
        <Input {...input} />
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    );
  }
  render() {
    // console.log(this.props);
    const { handleSubmit, reset } = this.props;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Movie Search</Title>
          </Body>
        </Header>
        <Content padder>
          <Field name="title" component={this.renderInput} />
          <Field name="year" component={this.renderInput} />
          <Button block primary onPress={handleSubmit(this.onSearchSubmit)}>
            <Text>Submit</Text>
          </Button>
          <Button block primary onPress={reset}>
            <Text>Clear Values</Text>
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
