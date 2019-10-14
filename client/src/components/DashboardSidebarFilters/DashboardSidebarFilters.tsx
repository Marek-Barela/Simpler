import React, { FC } from "react";
import DashboardSidebarFiltersItem from "../DashboardSidebarFiltersItem";
import {
  faInbox,
  faCalendarDay,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import styles from "./DashboardSidebarFilters.module.css";

const { list } = styles;
const DashboardSidebarFilters: FC = () => {
  return (
    <ul className={list}>
      <DashboardSidebarFiltersItem name="Inbox" icon={faInbox} />
      <DashboardSidebarFiltersItem name="Today" icon={faCalendarDay} />
      <DashboardSidebarFiltersItem name="Next 7 days" icon={faCalendarAlt} />
    </ul>
  );
};

export default DashboardSidebarFilters;
