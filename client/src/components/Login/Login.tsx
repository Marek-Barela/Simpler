import React, { FC } from "react";
import Alert from "../Alert";
import Logo from "../Logo";
import RedirectRule from "../RedirectRule";
import SectionWrapper from "../SectionWrapper";
import LoginForm from "../Login-Form";

const Login: FC = () => {
  return (
    <>
      <RedirectRule redirectPathIfNotAuthorized="/login" />
      <SectionWrapper>
        <Alert />
        <Logo />
        <LoginForm />
      </SectionWrapper>
    </>
  );
};

export default Login;
