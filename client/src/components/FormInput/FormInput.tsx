import React, { FC } from "react";
import styles from "./FormInput.module.css";

interface ParentProps {
  name: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  autocomplete?: string;
}

type Props = ParentProps;

const FormInput: FC<Props> = ({
  name,
  type,
  onChange,
  email,
  autocomplete = ""
}) => {
  const { inputWrapper } = styles;
  return (
    <div className={inputWrapper}>
      <label htmlFor={type}>{name}</label>
      <input
        name={type}
        type={type}
        onChange={onChange}
        value={email}
        aria-label={name}
        placeholder={name}
        autoComplete={autocomplete}
      />
    </div>
  );
};

export default FormInput;
