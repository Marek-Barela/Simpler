import React, { FC, useState } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { TasksResponse } from "../Dashboard/Dashboard-model";
import styles from "./DashboardContentTasksItem.module.css";

type Props = TasksResponse;

const DashboardContentTasksItem: FC<Props> = ({ description }) => {
  const [taskIsFinishing, setTaskIsFinishing] = useState(false);

  const handleTaskDoubleClick = () => {
    if (taskIsFinishing) return;
    console.log("work");
  };

  const handleFinishTaskButton = () => {
    setTaskIsFinishing(true);
  };

  const handleEditButtonClick = () => {
    if (taskIsFinishing) return;
    console.log("work");
  };

  const {
    taskItem,
    taskWrapper,
    taskButton,
    editButton,
    taskActivated
  } = styles;

  const taskItemStyling = taskItem + ` ${taskIsFinishing && taskActivated}`;

  return (
    <li className={taskItemStyling} onDoubleClick={handleTaskDoubleClick}>
      <div className={taskWrapper}>
        <button className={taskButton} onClick={handleFinishTaskButton}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        {description}
      </div>
      <button className={editButton} onClick={handleEditButtonClick}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </li>
  );
};

export default DashboardContentTasksItem;
