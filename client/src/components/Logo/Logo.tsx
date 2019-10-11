import React from "react";
import logoImage from "../../assets/images/simpler-logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  const { logo } = styles;
  return <img className={logo} src={logoImage} alt="simpler" />;
};

export default Logo;
