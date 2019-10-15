import React, { FC, useState, FormEvent } from "react";
import styles from "./DashboardContentTasksForm.module.css";

interface ParentProps {
  newProject: (action: boolean) => void;
}

type Props = ParentProps;

const DashboardContentTasksForm: FC<Props> = ({ newProject }) => {
  const [formData, setFormData] = useState({
    description: ""
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
    newProject(false);
    console.log(description);
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
          Create task
        </button>
      </div>
    </form>
  );
};

export default DashboardContentTasksForm;
