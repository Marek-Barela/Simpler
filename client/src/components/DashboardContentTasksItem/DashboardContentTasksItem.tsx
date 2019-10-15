import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { TasksResponse } from "../Dashboard/Dashboard-model";
import styles from "./DashboardContentTasksItem.module.css";

type Props = TasksResponse;

const DashboardContentTasksItem: FC<Props> = ({ description }) => {
  const handleTaskDoubleClick = () => {
    console.log("work");
  };

  const { taskItem, taskWrapper, taskButton, editButton } = styles;
  return (
    <li className={taskItem} onDoubleClick={handleTaskDoubleClick}>
      <div className={taskWrapper}>
        <button className={taskButton}></button>
        {description}
      </div>
      <button className={editButton}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </li>
  );
};

export default DashboardContentTasksItem;
