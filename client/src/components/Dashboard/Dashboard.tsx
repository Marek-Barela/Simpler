import React, { FC } from "react";
import styles from "./Dashboard.module.css";

const Dashboard: FC = () => {
  const { container } = styles;
  return (
    <div className={container}>
      <h1>Welcome in Dashboard</h1>
    </div>
  );
};

export default Dashboard;
