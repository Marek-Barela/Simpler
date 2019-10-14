import React, { FC } from "react";
import CreateProjectOverlay from "../CreateProjectOverlay";
import CreateProjectForm from "../CreateProjectForm";

const CreateProject: FC = () => {
  return (
    <CreateProjectOverlay>
      <CreateProjectForm />
    </CreateProjectOverlay>
  );
};

export default CreateProject;
