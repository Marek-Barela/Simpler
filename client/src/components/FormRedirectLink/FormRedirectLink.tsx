import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./FormRedirectLink.module.css";

interface ParentProps {
  text: string;
  path: string;
  name: string;
}

type Props = ParentProps;

const FormRedirectLink: FC<Props> = ({ text, path, name }) => {
  const { redirect } = styles;
  return (
    <span className={redirect}>
      {text} <Link to={path}>{name}</Link>
    </span>
  );
};

export default FormRedirectLink;
