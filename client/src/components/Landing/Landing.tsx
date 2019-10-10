import React from "react";
import RedirectRule from "../RedirectRule";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <RedirectRule redirectPathIfNotAuthorized="/" />
      <h1>Welcome on landing page</h1>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
    </div>
  );
};

export default Landing;
