import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { ProjectsResponse } from "../Dashboard/Dashboard-model";
import styles from "./DashboardSidebarDropdownListItem.module.css";

type Props = ProjectsResponse;

const DashboardSidebarDropdownListItem: FC<Props> = ({ color, title }) => {
  const {
    dropdownItem,
    itemWrapper,
    dropdownItemBubble,
    dropdownItemButton
  } = styles;
  return (
    <li className={dropdownItem}>
      <div className={itemWrapper}>
        <span
          className={dropdownItemBubble}
          style={{ backgroundColor: color }}
        />
        {title}
      </div>
      <button className={dropdownItemButton}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
};

export default DashboardSidebarDropdownListItem;
