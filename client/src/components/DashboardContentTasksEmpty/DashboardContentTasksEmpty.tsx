import React, { FC } from "react";
import emptyTasks from "../../assets/images/tasks.svg";
import styles from "./DashboardContentTasksEmpty.module.css";

interface ParentProps {
  newProject: (action: boolean) => void;
}

type Props = ParentProps;

const DashboardContentTasksEmpty: FC<Props> = ({ newProject }) => {
  const handleNewTaskClick = () => {
    newProject(true);
  };

  const { wrapper, image, button } = styles;
  return (
    <div className={wrapper}>
      <img src={emptyTasks} alt="" className={image} />
      <p>Everythings done</p>
      <p>It seems that everything is organized as it should be</p>
      <button onClick={handleNewTaskClick} className={button}>
        Create task
      </button>
    </div>
  );
};

export default DashboardContentTasksEmpty;
