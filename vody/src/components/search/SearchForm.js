import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Container, Content, Button, Input, Item, Label, Span, Form, Text, View } from 'native-base'
import {
  required,
  maxLength25,
  minLength2,
  renderField
} from "./formValidation.js";
import SearchFields from './SearchFields';

class SearchForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    FormInfo: null
  };

  renderForm() {
    const searchField = SearchFields.map(SearchField => {
      return (
        <Field
          key={SearchField.name}
          name={SearchField.name}
          type={SearchField.type}
          component={renderField}
          label={SearchField.label}
        />
      );
    });
    return searchField;
  }

  onSearchSubmit(data) {
    const {
      title,
      year
    } = data;
    const SearchInfo = {
      title,
      year
    };
    this.setState({ SearchInfo: SearchInfo });
    console.log(this.state);
  }

  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Container>
        <Content>
          <Form onSubmit={handleSubmit(this.onSearchSubmit)}>
            {this.renderForm()}
            <View>
              <Button rounded success type="submit" disabled={submitting}>
                <Text>Submit</Text>
              </Button>
            </View>
            <View>
              <Button
                rounded
                danger
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                <Text>Clear Values</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
};

SearchForm = reduxForm({
  form: "searchForm" // a unique identifier for this form
})(SearchForm);

export default SearchForm;