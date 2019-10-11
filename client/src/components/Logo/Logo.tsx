import React, { FC } from "react";
import logoImage from "../../assets/images/simpler-logo.png";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo: FC = () => {
  const { logo, link } = styles;
  return (
    <Link to="/" className={link}>
      <img className={logo} src={logoImage} alt="simpler" />
    </Link>
  );
};

export default Logo;
