import React, { FC, FormEvent, useState, ChangeEvent } from "react";
import ProjectFormSelect from "../CreateProjectFormSelect";
import CreateProjectButtons from "../CreateProjectFormButtons";
import { createProject } from "./CreateProjectForm-actions";
import { switchCreateProjectOverlay } from "../CreateProjectOverlay/CreateProjectOverlay-actions";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { CreateProjectData } from "./CreateProjectForm-model";
import styles from "./CreateProjectForm.module.css";

interface StateProps {}

interface DispatchProps {
  switchCreateProjectOverlay: (action: boolean) => void;
  createProject: (action: CreateProjectData) => void;
}

type Props = StateProps & DispatchProps;

const CreateProjectForm: FC<Props> = ({
  switchCreateProjectOverlay,
  createProject
}) => {
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
    const title = project.trim();
    if (title.length === 0 || !color) return;
    switchCreateProjectOverlay(false);
    createProject({ title, color });
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
        <CreateProjectButtons
          buttonIsDisabled={project.trim().length === 0 || !color}
        />
      </footer>
    </form>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {
  switchCreateProjectOverlay,
  createProject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProjectForm);
