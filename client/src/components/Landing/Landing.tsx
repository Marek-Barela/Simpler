import React, { FC } from "react";
import RedirectRule from "../RedirectRule";
import SectionWrapper from "../SectionWrapper";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/background.png";
import managemntImage from "../../assets/images/managment.png";
import styles from "./Landing.module.css";

const Landing: FC = () => {
  const { image, header, textWrapper, imageWrapper } = styles;
  return (
    <>
      <RedirectRule redirectPathIfNotAuthorized="/" />
      <img src={backgroundImage} className={image} alt="" />
      <SectionWrapper>
        <Logo />
        <header className={header}>
          <div className={textWrapper}>
            <h1>
              Manage your time and make your life{" "}
              <strong style={{ color: "#53e3a6" }}>simpler</strong>
            </h1>
            <Link to="/login">Login</Link>
            <Link to="/registration">Register</Link>
          </div>
          <div className={imageWrapper}>
            <img src={managemntImage} alt="" />
          </div>
        </header>
      </SectionWrapper>
    </>
  );
};

export default Landing;
