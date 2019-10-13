import React from "react";
import DashboardSidebarDropdown from "../DashboardSidebarDropdown";
import styles from "./DashboardSidebar.module.css";

const DashboardSidebar = () => {
  const { aside } = styles;

  return (
    <aside className={aside}>
      <DashboardSidebarDropdown />
    </aside>
  );
};

export default DashboardSidebar;
