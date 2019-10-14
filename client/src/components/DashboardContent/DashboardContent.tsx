import React from "react";
import DashboardContentTasks from "../DashboardContentTasks";
import styles from "./DashboardContent.module.css";

const DashboardContent = () => {
  const { content } = styles;
  return (
    <section className={content}>
      <DashboardContentTasks />
    </section>
  );
};

export default DashboardContent;
