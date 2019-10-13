import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getUserDashboardData } from "../Dashboard/Dashboard-selector";
import { DashboardState } from "../Dashboard/Dashboard-reducer";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./DashboardSidebarDropdownList.module.css";

interface ParentProps {
  listStyling: string;
}

interface StateProps {
  dashboardData: DashboardState;
}

type Props = ParentProps & StateProps;

const DashboardSidebarDropdownList: FC<Props> = ({ listStyling, dashboardData }) => {
  const { projects = [] } = dashboardData;
  const { dropdownItem, newProject, newProjectPlus } = styles;
  return (
    <ul className={listStyling}>
      {projects.map(project => {
        const { title, _id } = project;
        return <li className={dropdownItem} key={_id}>{title}</li>
      })}
      <button className={newProject}>
        <span className={newProjectPlus}><FontAwesomeIcon icon={faPlus} /></span> {" "} 
        Add project
      </button>
    </ul>
  );
};

const mapStateToProps = (state: RootState) => ({
  dashboardData: getUserDashboardData(state)
});

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  {}
)(DashboardSidebarDropdownList);
