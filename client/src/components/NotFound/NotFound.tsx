import React, { FC } from "react";
import styles from "./NotFound.module.css";

const NotFound: FC = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <h1>404</h1>
    </div>
  );
};

export default NotFound;
