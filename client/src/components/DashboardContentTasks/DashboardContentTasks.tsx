import React, { FC, useState } from "react";
import CreateNewTask from "../DashboardContentTasksForm";
import NewTasksButton from "../DashboardContentTasksButton";
import TaskItem from "../DashboardContentTasksItem";
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
  const [activeInput, setActiveInput] = useState(false);

  const handleNewProjectClick = (action: boolean) => {
    setActiveInput(action);
  };

  const { projectTitle, projectTasks } = activeProject;
  const { tasksContainer, tasksHeader, tasksList } = styles;
  return (
    <div className={tasksContainer}>
      <h2 className={tasksHeader}>{projectTitle}</h2>
      <ul className={tasksList}>
        {projectTasks.map(project => {
          const { _id } = project;
          return <TaskItem key={_id} {...project} />;
        })}
      </ul>
      {!activeInput ? (
        <NewTasksButton newProject={handleNewProjectClick} />
      ) : (
        <CreateNewTask newProject={handleNewProjectClick} />
      )}
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
