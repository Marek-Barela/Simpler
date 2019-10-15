import React, { FC, useState, FormEvent } from "react";
import { createTask } from "./DashboardContentTasksForm-actions";
import { CreateTaskData } from "./DashboardContentTasksForm-model";
import { getActiveProjectState } from "../DashboardContentTasks/DashboardContentTasks-selectors";
import { ActiveProjectState } from "../DashboardContentTasks/DashboardContentTasks-model";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./DashboardContentTasksForm.module.css";

interface StateProps {
  activeProject: ActiveProjectState;
}

interface DispatchProps {
  createTask: (action: CreateTaskData) => void;
}

interface ParentProps {
  newProject: (action: boolean) => void;
}

type Props = StateProps & DispatchProps & ParentProps;

const DashboardContentTasksForm: FC<Props> = ({
  newProject,
  activeProject,
  createTask
}) => {
  const [formData, setFormData] = useState({
    description: ""
  });
  const { description } = formData;
  const { activeProjectID } = activeProject;
  const descriptionIsEmpty = description.trim().length === 0;
  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (descriptionIsEmpty) return;
    newProject(false);
    createTask({ description, projectID: activeProjectID });
  };

  const handleCancelClick = () => {
    newProject(false);
  };

  const { form, input, button, createButton } = styles;
  const createButtonStyling = button + " " + createButton;
  return (
    <form onSubmit={onSubmit} className={form}>
      <input
        name="description"
        onChange={onChange}
        value={description}
        className={input}
        placeholder="e.g. Learn portuguese language"
      />
      <div>
        <button className={button} type="button" onClick={handleCancelClick}>
          Cancel
        </button>
        <button
          className={createButtonStyling}
          type="submit"
          disabled={descriptionIsEmpty}
        >
          Add task
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state: RootState) => ({
  activeProject: getActiveProjectState(state)
});

const mapDispatchToProps = {
  createTask
};

export default connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContentTasksForm);
