import React, { FC } from "react";
import { ProjectsResponse } from "../Dashboard/Dashboard-model";
import styles from "./DashboardSidebarDropdownListItem.module.css";

type Props = ProjectsResponse;

const DashboardSidebarDropdownListItem: FC<Props> = ({ color, title }) => {
  const { dropdownItem, dropdownItemBubble } = styles;
  return (
    <li className={dropdownItem}>
      <span className={dropdownItemBubble} style={{ backgroundColor: color }} />
      {title}
    </li>
  );
};

export default DashboardSidebarDropdownListItem;
