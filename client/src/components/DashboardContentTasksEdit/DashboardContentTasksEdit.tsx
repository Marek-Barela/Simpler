import React, { FC, FormEvent, useState } from "react";
import { editTask } from "./DashboardContentTasksEdit-actions";
import { EditTaskData } from "./DashboardContentTasksEdit-model";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./DashboardContentTasksEdit.module.css";

interface DispatchProps {
  editTask: (action: EditTaskData) => void;
}

interface ParentProps {
  _id: string;
  prevDescription: string;
  cancelEditMode: () => void;
}

type Props = DispatchProps & ParentProps;

const DashboardContentTasksEdit: FC<Props> = ({
  _id,
  prevDescription,
  cancelEditMode,
  editTask
}) => {
  const [formData, setFormData] = useState({
    description: prevDescription
  });
  const { description } = formData;
  const descriptionIsEmpty = description.trim().length === 0;

  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (descriptionIsEmpty) return;
    editTask({ _id, description });
    cancelEditMode();
  };

  const handleCancelClick = () => {
    cancelEditMode();
  };

  const { form, input, button, createButton } = styles;
  const createButtonStyling = button + " " + createButton;

  return (
    <form onSubmit={onSubmit} className={form} spellCheck={false}>
      <input
        name="description"
        onChange={onChange}
        value={description}
        className={input}
        placeholder="Update your task"
        autoComplete="off"
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
          Update
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  editTask
};

export default connect<{}, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(DashboardContentTasksEdit);
