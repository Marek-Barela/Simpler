import React, { FC } from "react";
import Alert from "../Alert";
import RedirectRule from "../RedirectRule";
import RegistrationForm from "../Registration-Form";
import { Link } from "react-router-dom";
import styles from "./Registration.module.css";

const Registration: FC = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <RedirectRule redirectPathIfNotAuthorized="/registration" />
      <Alert />
      <h1>Welcome in registration page</h1>
      <Link to="/">Main page</Link>
      <Link to="/login">login</Link>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
