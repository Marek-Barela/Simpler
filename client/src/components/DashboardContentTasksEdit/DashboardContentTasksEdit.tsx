import React, { FC, FormEvent, useState } from "react";
import styles from "./DashboardContentTasksEdit.module.css";

interface ParentProps {
  _id: string;
  prevDescription: string;
  cancelEditMode: () => void;
}

type Props = ParentProps;

const DashboardContentTasksEdit: FC<Props> = ({
  prevDescription,
  cancelEditMode
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

export default DashboardContentTasksEdit;
