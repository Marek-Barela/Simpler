import React, { FC, useState } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import ListItemPopup from "../DashboardSidebarDropdownListItemPopup";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { ProjectsResponse } from "../Dashboard/Dashboard-model";
import styles from "./DashboardSidebarDropdownListItem.module.css";

type Props = ProjectsResponse;

const DashboardSidebarDropdownListItem: FC<Props> = ({ _id, color, title }) => {
  const [popupIsVisible, setPopupIsVisible] = useState(false);

  const handleDeleteItemClick = () => {
    setPopupIsVisible(true);
  };

  const {
    dropdownItem,
    dropdownItemTextWrapper,
    dropdownItemBubble,
    dropdownItemButtonWrapper,
    dropdownItemButton
  } = styles;
  return (
    <li className={dropdownItem}>
      <div className={dropdownItemTextWrapper}>
        <span
          className={dropdownItemBubble}
          style={{ backgroundColor: color }}
        />
        {title}
      </div>
      <div className={dropdownItemButtonWrapper}>
        <button className={dropdownItemButton} onClick={handleDeleteItemClick}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        {popupIsVisible ? (
          <ListItemPopup setPopupIsVisible={setPopupIsVisible} id={_id} />
        ) : null}
      </div>
    </li>
  );
};

export default DashboardSidebarDropdownListItem;
