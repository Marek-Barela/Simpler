import React, { FC } from "react";
import Alert from "../Alert";
import Logo from "../Logo";
import SectionWrapper from "../SectionWrapper";
import RedirectRule from "../RedirectRule";
import RegistrationForm from "../Registration-Form";

const Registration: FC = () => {
  return (
    <>
      <RedirectRule redirectPathIfNotAuthorized="/registration" />
      <SectionWrapper>
        <Alert />
        <Logo />
        <RegistrationForm />
      </SectionWrapper>
    </>
  );
};

export default Registration;
