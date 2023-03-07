import React from "react";
import { twClass } from "types/class_name";
import { IFormEvent, IFormProps } from "types/form";

const Form = (props: IFormProps) => {
  const className = (props.classes || []).join(" ");
  return (
    <form className={className} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

const TextInput = (props: ITextInputProps) => {
  const className = (props.classes || []).join(" ");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange({ inputName: event.target.name, value: event.target.value });
  return (
    <input
      type="text"
      className={className}
      name={props.name}
      onChange={onChange}
      onKeyDown={props.onKeyDown}
      placeholder={props.placeholder}
      value={props.value || ""}
    />
  );
};

const AmountInput = (props: ITextInputProps) => {
  const classes = ["text-right", ...(props.classes || [])];

  return (
    <TextInput
      classes={classes}
      name={props.name}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      placeholder={props.placeholder}
      value={props.value || ""}
    />
  );
};

export { Form, TextInput, AmountInput };
