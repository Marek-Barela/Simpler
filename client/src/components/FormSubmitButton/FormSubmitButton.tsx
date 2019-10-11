import React, { FC } from "react";
import styles from "./FormSubmitButton.module.css";

interface ParentProps {
  text: string;
}

type Props = ParentProps;

const FormSubmitButton: FC<Props> = ({ text }) => {
  const { formButton } = styles;
  return (
    <button className={formButton} type="submit">
      {text}
    </button>
  );
};

export default FormSubmitButton;
