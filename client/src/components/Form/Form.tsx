import React, { FC, FormEvent } from "react";
import styles from "./Form.module.css";

interface ParentProps {
  children: JSX.Element[];
  handleSubmit: (e: FormEvent<Element>) => Promise<void>;
}

type Props = ParentProps;

const Form: FC<Props> = ({ children, handleSubmit }) => {
  const { form } = styles;
  return (
    <form onSubmit={e => handleSubmit(e)} className={form}>
      {children}
    </form>
  );
};

export default Form;
