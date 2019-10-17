import React, { FC, useState } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import EditTaskForm from "../DashboardContentTasksEdit";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { TasksResponse } from "../Dashboard/Dashboard-model";
import { deleteUserTask } from "./DashboardContentTasksItem-actions";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./DashboardContentTasksItem.module.css";

interface DispatchProps {
  deleteUserTask: (id: string) => void;
}

type Props = DispatchProps & TasksResponse;

const DashboardContentTasksItem: FC<Props> = ({
  _id,
  description,
  deleteUserTask
}) => {
  const [taskData, setTaskData] = useState({
    taskIsFinishing: false,
    taskIsEdited: false
  });

  const { taskIsFinishing, taskIsEdited } = taskData;

  const handleTaskDoubleClick = () => {
    if (taskIsFinishing) return; // Prevent if task is already deleting
    setTaskData({ ...taskData, taskIsEdited: true });
  };

  const handleFinishTaskButton = () => {
    if (taskIsFinishing) return;
    setTaskData({ ...taskData, taskIsFinishing: true });
    setTimeout(() => {
      deleteUserTask(_id);
    }, 500);
  };

  const handleEditButtonClick = () => {
    if (taskIsFinishing) return;
    setTaskData({ ...taskData, taskIsEdited: true });
  };

  const handleCancelEditClick = () => {
    setTaskData({ ...taskData, taskIsEdited: false });
  };

  const {
    taskItem,
    taskWrapper,
    taskButton,
    editButton,
    taskActivated
  } = styles;

  const taskItemStyling = taskItem + ` ${taskIsFinishing && taskActivated}`;

  return !taskIsEdited ? (
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
  ) : (
    <EditTaskForm
      cancelEditMode={handleCancelEditClick}
      _id={_id}
      prevDescription={description}
    />
  );
};

const mapDispatchToProps = {
  deleteUserTask
};

export default connect<{}, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(DashboardContentTasksItem);
