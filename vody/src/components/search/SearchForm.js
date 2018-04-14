import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Container, Content, Button, Input, Label, Span, Form } from 'native-base'
import submit from './submit';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <Container>
    <Label>{label}</Label>
    <Container>
      <Input {...input} placeholder={label} type={type} />
      {touched && error && <Span>{error}</Span>}
    </Container>
  </Container>
);

const SearchForm = props => {
    const { error, handleSubmit, pristine, reset, submitting } = props;
    console.log("HI TEST***************")
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit(submit)}>
        <Field
            name="username"
            type="text"
            component={renderField}
            label="Username"
        />
        <Field
            name="password"
            type="password"
            component={renderField}
            label="Password"
        />
        {error && <strong>{error}</strong>}
        <Container>
            <Button type="submit" disabled={submitting}>
            Log In
            </Button>
            <Button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
            </Button>
        </Container>
        </Form>
      </Content>
    </Container>
  );
};

SearchForm = reduxForm({
  form: "searchForm" // a unique identifier for this form
})(SearchForm);

export default SearchForm;