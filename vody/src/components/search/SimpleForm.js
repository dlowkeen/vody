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
    console.log(this.props);
    console.log(this.state);
    this.renderInput = this.renderInput.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit(data) {
    const { title, year } = data;
    const SearchInfo = {
      title,
      year
    };
    this.setState({
      search: data
    })
    console.log("this.state", this.state);
    console.log("this.props", this.props);
    // this.props.fetchMovieData(movie);
    // let APIKey = "718190bc3e37096f5f6a3adfdeb9abaa";
    // let queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + APIKey + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    // axios.get(queryURL).then(response => {
    //   let movie = response.data;
    //   console.log(movie);
    //   console.log(this.state);
    // });
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
    const { handleSubmit, reset } = this.props;
    console.log(this.state);
    return (
      <Container>
        <Header>
          <Body>
            <Title>Redux Form</Title>
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
