import React, { FC } from "react";
import Alert from "../Alert";
import Logo from "../Logo";
import RedirectRule from "../RedirectRule";
import RegistrationForm from "../Registration-Form";
import styles from "./Registration.module.css";

const Registration: FC = () => {
  const { container } = styles;
  return (
    <>
      <RedirectRule redirectPathIfNotAuthorized="/registration" />
      <div className={container}>
        <Alert />
        <Logo />
        <RegistrationForm />
      </div>
    </>
  );
};

export default Registration;
