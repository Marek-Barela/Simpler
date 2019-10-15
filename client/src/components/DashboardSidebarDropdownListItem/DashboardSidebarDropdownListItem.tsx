import React, { FC, useState } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import ListItemPopup from "../DashboardSidebarDropdownListItemPopup";
import { getProjectData } from "../DashboardContentTasks/DashboardContentTasks-actions";
import {
  GetProjectData,
  ActiveProjectState
} from "../DashboardContentTasks/DashboardContentTasks-model";
import { getActiveProjectState } from "../DashboardContentTasks/DashboardContentTasks-selectors";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { ProjectsResponse } from "../Dashboard/Dashboard-model";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./DashboardSidebarDropdownListItem.module.css";

interface StateProps {
  activeProject: ActiveProjectState;
}

interface DispatchProps {
  getProjectData: (action: GetProjectData) => void;
}

type Props = StateProps & DispatchProps & ProjectsResponse;

const DashboardSidebarDropdownListItem: FC<Props> = ({
  _id,
  color,
  title,
  getProjectData,
  activeProject
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
    dropdownItemActive,
    dropdownItemTextWrapper,
    dropdownItemBubble,
    dropdownItemButtonWrapper,
    dropdownItemButton
  } = styles;

  const { activeProjectID } = activeProject;
  const itemStyling = dropdownItem + ` ${activeProjectID === _id && dropdownItemActive}`;
  return (
    <li className={itemStyling} onClick={handleProjectClick}>
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

const mapStateToProps = (state: RootState) => ({
  activeProject: getActiveProjectState(state)
});

const mapDispatchToProps = {
  getProjectData
};

export default connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(DashboardSidebarDropdownListItem);
