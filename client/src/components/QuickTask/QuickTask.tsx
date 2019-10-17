import React, { useState, FormEvent } from "react";
import QuickTaskOverlay from "../QuickTaskOverlay";
import styles from "./QuickTask.module.css";

const QuickTask = () => {
  const [formData, setFormData] = useState({
    description: ""
  });
  const { description } = formData;
  //const { activeProjectID } = activeProject;
  const descriptionIsEmpty = description.trim().length === 0;

  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (descriptionIsEmpty) return;
    //createTask({ description, projectID: activeProjectID });
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
            placeholder="e.g. Learn portuguese language"
            autoComplete="off"
          />
          <div>
            <button className={button} type="button">
              Cancel
            </button>
            <button className={createButtonStyling} type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </QuickTaskOverlay>
  );
};

export default QuickTask;
