import React from 'react';

export enum InputType {
  Text = 'text',
  Button = 'button',
  CheckBox = 'checkbox',
  Color = 'color',
  DateTimeLocal = 'datetime-local',
  Email = 'email',
  File = 'file',
  Hidden = 'hidden',
  Password = 'password',
  Reset = 'reset',
  Submit = 'submit',
}

interface InputInterface {
  type: InputType;
  className?: string;
  name?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(inputProps: InputInterface) {
  return (
    <>
      <input
        type={inputProps.type}
        id={inputProps.id}
        name={inputProps.name}
        className={inputProps.className}
        value={inputProps.value}
        placeholder={inputProps.placeholder}
        required={inputProps.required}
        onChange={inputProps.onChange}
      />
    </>
  );
}
