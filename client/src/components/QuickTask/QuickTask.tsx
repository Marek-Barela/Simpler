import React, { useState, FormEvent, ChangeEvent, FC } from "react";
import QuickTaskOverlay from "../QuickTaskOverlay";
import QuickTaskSelect from "../QuickTaskSelect";
import { switchCreateQuickTaskOverlay } from "../QuickTaskOverlay/QuickTaskOverlay-actions";
import { createTask } from "../DashboardContentTasksForm/DashboardContentTasksForm-actions";
import { CreateTaskData } from "../DashboardContentTasksForm/DashboardContentTasksForm-model";
import { connect } from "react-redux";
import styles from "./QuickTask.module.css";

interface DispatchProps {
  switchCreateQuickTaskOverlay: (action: boolean) => void;
  createTask: (action: CreateTaskData) => void;
}

type Props = DispatchProps;

const QuickTask: FC<Props> = ({ switchCreateQuickTaskOverlay, createTask }) => {
  const [formData, setFormData] = useState({
    description: "",
    projectID: "inbox"
  });
  const { description, projectID } = formData;
  const descriptionIsEmpty = description.trim().length === 0;

  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (descriptionIsEmpty) return;
    switchCreateQuickTaskOverlay(false);
    setFormData({ ...formData, description: "" });
    createTask({ description, projectID });
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
    setFormData({ ...formData, projectID: e.target.value });
  };

  const handleCancelQickTaskClick = () => {
    setFormData({ ...formData, description: "" });
    switchCreateQuickTaskOverlay(false);
  };

  const { container, text, form, input, button, createButton } = styles;
  const createButtonStyling = button + " " + createButton;
  return (
    <QuickTaskOverlay>
      <div className={container}>
        <p className={text}>Quick adding task</p>
        <form className={form} onSubmit={onSubmit}>
          <input
            name="description"
            onChange={onChange}
            value={description}
            className={input}
            placeholder="e.g. Conference on Wednesday"
            autoComplete="off"
          />
          <QuickTaskSelect
            handleChangeSelect={handleChangeSelect}
            projectID={projectID}
          />
          <div>
            <button
              className={button}
              type="button"
              onClick={handleCancelQickTaskClick}
            >
              Cancel
            </button>
            <button
              className={createButtonStyling}
              type="submit"
              disabled={descriptionIsEmpty}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </QuickTaskOverlay>
  );
};

const mapDispatchToProps = {
  switchCreateQuickTaskOverlay,
  createTask
};

export default connect(
  null,
  mapDispatchToProps
)(QuickTask);
