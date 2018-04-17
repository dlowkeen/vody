import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
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
const validate = values => {
  const error = {};
  error.title = "";
  error.year = "";
  var ema = values.title;
  var nm = values.year;
  if (values.title === undefined) {
    ema = "";
  }
  if (values.year === undefined) {
    nm = "";
  }
  if (ema.length < 3 && ema !== "") {
    error.email = "too short";
  }
  // if (!ema.includes("@") && ema !== "") {
  //   error.email = "@ not included";
  // }
  // if (nm.length > 8) {
  //   error.name = "max 8 characters";
  // }
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

  onSearchSubmit() {
    this.props.fetchMovieData();
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
    const { handleSubmit, reset, pristine, submitting } = this.props;
    console.log("this.props", this.props);
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
          <Button block primary 
            stype="submit"
            disabled={submitting}
            onPress={handleSubmit(this.onSearchSubmit)}>
            <Text>Submit</Text>
          </Button>
          <Button block primary onClick={reset} type="button">
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
