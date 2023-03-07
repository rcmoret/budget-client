export interface IFormProps {
  children: JSX.Element[] | JSX.Element;
  classes?: twClass[];
  onSubmit: () => void;
}
export interface ITextInputProps {
  classes?: string[];
  name: string;
  value: string | null;
  placeholder?: string;
  onChange: (event: IFormEvent) => void;
  isDisabled?: boolean;
  onKeyDown?: () => void;
}

interface IRadioInput {
  isChecked: (name: string) => boolean;
  name: string;
  onChange: (event: IFormEvent) => void;
  classes: Array<string>;
}
export interface IFormEvent {
  inputName: string;
  value: string | number | boolean;
}

