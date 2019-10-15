import React, { FC, useState } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import ListItemPopup from "../DashboardSidebarDropdownListItemPopup";
import { getProjectData } from "../DashboardContentTasks/DashboardContentTasks-actions";
import { GetProjectData } from "../DashboardContentTasks/DashboardContentTasks-model";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { ProjectsResponse } from "../Dashboard/Dashboard-model";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./DashboardSidebarDropdownListItem.module.css";

interface DispatchProps {
  getProjectData: (action: GetProjectData) => void;
}

type Props = DispatchProps & ProjectsResponse;

const DashboardSidebarDropdownListItem: FC<Props> = ({
  _id,
  color,
  title,
  getProjectData
}) => {
  const [popupIsVisible, setPopupIsVisible] = useState(false);

  const handleDeleteItemClick = () => {
    setPopupIsVisible(true);
  };

  const handleProjectClick = () => {
    getProjectData({ _id, title });
  };

  const {
    dropdownItem,
    dropdownItemTextWrapper,
    dropdownItemBubble,
    dropdownItemButtonWrapper,
    dropdownItemButton
  } = styles;
  return (
    <li className={dropdownItem} onClick={handleProjectClick}>
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

const mapDispatchToProps = {
  getProjectData
};

export default connect<{}, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(DashboardSidebarDropdownListItem);
