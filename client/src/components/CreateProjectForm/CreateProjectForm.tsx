import React, { FC, FormEvent, useState, ChangeEvent } from "react";
import ProjectFormSelect from "../CreateProjectFormSelect";
import styles from "./CreateProjectForm.module.css";

const CreateProjectForm: FC = () => {
  const [formData, setFormData] = useState({
    project: "",
    color: "#B8255F"
  });
  const { project, color } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const projectValue = project.trim();
    if (projectValue.length === 0 || !color) return;
    console.log({ projectValue, color });
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
    setFormData({ ...formData, color: e.target.value });
  };

  const { form, header, content, footer } = styles;
  return (
    <form className={form} onSubmit={onSubmit}>
      <header className={header}>Add project</header>
      <section className={content}>
        <label htmlFor="project">Name of project</label>
        <input name="project" type="text" onChange={onChange} value={project} />
        <ProjectFormSelect
          handleChangeSelect={handleChangeSelect}
          color={color}
        />
      </section>
      <footer className={footer}>
        <button type="button">Cancel</button>
        <button type="submit" disabled={project.trim().length === 0 || !color}>
          Add
        </button>
      </footer>
    </form>
  );
};

export default CreateProjectForm;
