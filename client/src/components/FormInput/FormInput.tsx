import React, { FC } from "react";
import styles from "./FormInput.module.css";

interface ParentProps {
  name: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  autocomplete?: string;
}

type Props = ParentProps;

const FormInput: FC<Props> = ({
  name,
  type,
  onChange,
  value,
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
        value={value}
        aria-label={name}
        placeholder={name}
        autoComplete={autocomplete}
      />
    </div>
  );
};

export default FormInput;
