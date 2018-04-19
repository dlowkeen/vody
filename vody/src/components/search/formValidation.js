import React from "react";
import { Label, Span, Input, Item, Text } from "native-base";

export const required = value => (value ? undefined : "Required");
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength25 = maxLength(25);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <Item fixedLabel>
      <Label>{label}</Label>
      <Input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span style={{ color: "#ff0000" }}>*{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </Item>
  );
};

export default renderInput = ({ input, label, type, meta: { touched, error, warning } }) => {
  var hasError = false;
  if (error !== undefined) {
    hasError = true;
  }
  return (
    <Item error={hasError}>
      <Input {...input} placeholder={label}/>
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  );
}
