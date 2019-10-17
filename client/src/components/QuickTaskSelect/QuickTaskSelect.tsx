import React, { ChangeEvent, FC } from "react";
import { getUserDashboardData } from "../Dashboard/Dashboard-selector";
import { DashboardState } from "../Dashboard/Dashboard-reducer";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { createSubText } from "../../utils/createSubText";
import styles from "./QuickTaskSelect.module.css";

interface StateProps {
  dashboardData: DashboardState;
}

interface ParentProps {
  handleChangeSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
  projectID: string;
}

type Props = StateProps & ParentProps;

const QuickTaskSelect: FC<Props> = ({
  dashboardData,
  handleChangeSelect,
  projectID
}) => {
  const { select, option } = styles;
  const { projects } = dashboardData;
  return (
    <select className={select} onChange={handleChangeSelect} value={projectID}>
      {BaseProjects.map(project => {
        const { id, title } = project;
        return (
          <option className={option} value={id} key={id}>
            {title}
          </option>
        );
      })}
      {projects.map(project => {
        const { _id, title } = project;
        return (
          <option className={option} value={_id} key={_id}>
            {createSubText(title)}
          </option>
        );
      })}
    </select>
  );
};

const BaseProjects = [
  {
    id: "inbox",
    title: "Inbox"
  },
  {
    id: "today",
    title: "Today"
  },
  {
    id: "week",
    title: "Next 7 Days"
  }
];

const mapStateToProps = (state: RootState) => ({
  dashboardData: getUserDashboardData(state)
});

export default connect(
  mapStateToProps,
  {}
)(QuickTaskSelect);
