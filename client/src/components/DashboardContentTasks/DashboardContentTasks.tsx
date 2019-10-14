import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getActiveProjectState } from "./DashboardContentTasks-selectors";
import { connect } from "react-redux";
import styles from "./DashboardContentTasks.module.css";
import { RootState } from "../../redux/root-reducer";
import { ActiveProjectState } from "./DashboardContentTasks-model";

interface StateProps {
  activeProject: ActiveProjectState;
}

type Props = StateProps;

const DashboardContentTasks: FC<Props> = ({ activeProject }) => {
  const handleNewProjectClick = () => {
    console.log("new task");
  };

  const { projectTitle, projectTasks } = activeProject;
  const { tasksContainer, tasksList, newTask, newTaskPlus } = styles;
  return (
    <div className={tasksContainer}>
      <h2>{projectTitle}</h2>
      <ul className={tasksList}>
        {projectTasks.map(project => {
          const { _id, description } = project;
          return <li key={_id}>{description}</li>;
        })}
      </ul>
      <button className={newTask} onClick={handleNewProjectClick}>
        <span className={newTaskPlus}>
          <FontAwesomeIcon icon={faPlus} />
        </span>{" "}
        Add task
      </button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  activeProject: getActiveProjectState(state)
});

export default connect(
  mapStateToProps,
  {}
)(DashboardContentTasks);
