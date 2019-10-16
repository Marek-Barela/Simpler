import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./DashboardContentTasksButton.module.css";

interface ParentProps {
  newProject: (action: boolean) => void;
}

type Props = ParentProps;

const DashboardContentTasksButton: FC<Props> = ({ newProject }) => {
  const { newTask, newTaskPlus } = styles;

  const handleTaskButtonClick = () => {
    newProject(true);
  };

  return (
    <button className={newTask} onClick={handleTaskButtonClick}>
      <span className={newTaskPlus}>
        <FontAwesomeIcon icon={faPlus} />
      </span>{" "}
      Add task
    </button>
  );
};

export default DashboardContentTasksButton;
