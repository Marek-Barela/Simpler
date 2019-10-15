import React, { FC } from "react";
import { TasksResponse } from "../Dashboard/Dashboard-model";
import styles from "./DashboardContentTasksItem.module.css";

type Props = TasksResponse;

const DashboardContentTasksItem: FC<Props> = ({ description }) => {
  const { taskItem } = styles;
  return <li className={taskItem}>{description}</li>;
};

export default DashboardContentTasksItem;
