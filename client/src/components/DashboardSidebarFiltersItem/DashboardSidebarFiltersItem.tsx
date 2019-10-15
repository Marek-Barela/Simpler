import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { getProjectData } from "../DashboardContentTasks/DashboardContentTasks-actions";
import {
  GetProjectData,
  ActiveProjectState
} from "../DashboardContentTasks/DashboardContentTasks-model";
import { getActiveProjectState } from "../DashboardContentTasks/DashboardContentTasks-selectors";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./DashboardSidebarFiltersItem.module.css";

interface StateProps {
  activeProject: ActiveProjectState;
}

interface DispatchProps {
  getProjectData: (action: GetProjectData) => void;
}

interface ParentProps {
  title: string;
  icon: IconProp;
  id: string;
}

type Props = StateProps & DispatchProps & ParentProps;


const DashboardSidebarFiltersItem: FC<Props> = ({
  title,
  icon,
  id,
  getProjectData,
  activeProject
}) => {
  const handleProjectFilterClick = () => {
    getProjectData({ _id: id, title });
  };
  
  const { activeProjectID } = activeProject;
  const { item, itemActive } = styles;
  const itemStyling = item + ` ${activeProjectID === id && itemActive}`
  return (
    <li className={itemStyling} onClick={handleProjectFilterClick}>
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      {title}
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
)(DashboardSidebarFiltersItem);
