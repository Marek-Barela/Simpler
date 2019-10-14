import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { switchCreateProjectOverlay } from "../CreateProjectOverlay/CreateProjectOverlay-actions";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./CreateProjectButton.module.css";

interface DispatchProps {
  switchCreateProjectOverlay: (action: boolean) => void;
}

type Props = DispatchProps;

const CreateProjectButton: FC<Props> = ({ switchCreateProjectOverlay }) => {
  const handleNewProjectClick = () => {
    switchCreateProjectOverlay(true);
  };

  const { newProject, newProjectPlus } = styles;
  return (
    <button className={newProject} onClick={handleNewProjectClick}>
      <span className={newProjectPlus}>
        <FontAwesomeIcon icon={faPlus} />
      </span>{" "}
      Add project
    </button>
  );
};

const mapDispatchToProps = {
  switchCreateProjectOverlay
};

export default connect<{}, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(CreateProjectButton);
