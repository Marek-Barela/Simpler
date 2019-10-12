import React from "react";
import styles from "./DashboardSidebar.module.css";

const DashboardSidebar = () => {
  const { aside } = styles;
  return <aside className={aside}>sidebar</aside>;
};

export default DashboardSidebar;
