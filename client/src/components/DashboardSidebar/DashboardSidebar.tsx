import React from "react";
import DashboardSidebarFilters from "../DashboardSidebarFilters";
import DashboardSidebarDropdown from "../DashboardSidebarDropdown";
import styles from "./DashboardSidebar.module.css";

const DashboardSidebar = () => {
  const { aside } = styles;

  return (
    <aside className={aside}>
      <DashboardSidebarFilters />
      <DashboardSidebarDropdown />
    </aside>
  );
};

export default DashboardSidebar;
