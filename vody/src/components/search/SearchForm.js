import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Container, Content, Button, Input, Item, Label, Span, Form } from 'native-base'
import {
  required,
  maxLength25,
  minLength2,
  renderField
} from "./formValidation.js";
import SearchFields from './SearchFields';
import submit from './submit';

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

  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Container>
        <Content>
          <Form onSubmit={handleSubmit(submit)}>
            {this.renderForm()}
            <Container>
              <Button type="submit" disabled={submitting}>
                Log In
              </Button>
              <Button
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
              </Button>
            </Container>
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