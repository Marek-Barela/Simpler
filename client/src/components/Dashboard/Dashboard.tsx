import React, { FC } from "react";
import DashboardSidebar from "../DashboardSidebar";
import DashboardContent from "../DashboardContent";
import DashboardTopNavigation from "../DashboardTopNavigation";
import styles from "./Dashboard.module.css";

const Dashboard: FC = () => {
  const { container, contentWrapper } = styles;
  return (
    <div className={container}>
      <DashboardTopNavigation />
      <main className={contentWrapper}>
        <DashboardSidebar />
        <DashboardContent />
      </main>
    </div>
  );
};

export default Dashboard;
