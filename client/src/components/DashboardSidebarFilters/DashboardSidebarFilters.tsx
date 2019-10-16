import React, { FC } from "react";
import DashboardSidebarFiltersItem from "../DashboardSidebarFiltersItem";
import { faInbox, faCalendarDay, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./DashboardSidebarFilters.module.css";

const { list } = styles;
const DashboardSidebarFilters: FC = () => {
  return (
    <ul className={list}>
      <DashboardSidebarFiltersItem title="Inbox" icon={faInbox} id="inbox" />
      <DashboardSidebarFiltersItem title="Today" icon={faCalendarDay} id="today" />
      <DashboardSidebarFiltersItem title="Next 7 days" icon={faCalendarAlt} id="week" />
    </ul>
  );
};

export default DashboardSidebarFilters;
