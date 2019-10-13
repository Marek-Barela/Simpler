import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { switchCreateProjectOverlay } from "../CreateProjectOverlay/CreateProjectOverlay-actions";
import { getProjectOverlayState } from "../CreateProjectOverlay/CreateProjectOverlay-selectors";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./CreateProjectButton.module.css";

interface StateProps {
  isProjectOverlayOpen: boolean;
}

interface DispatchProps {
  switchCreateProjectOverlay: (action: boolean) => void;
}

type Props = StateProps & DispatchProps;

const CreateProjectButton: FC<Props> = ({
  switchCreateProjectOverlay,
  isProjectOverlayOpen
}) => {
  const handleNewProjectClick = () => {
    switchCreateProjectOverlay(isProjectOverlayOpen);
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

const mapStateToProps = (state: RootState) => ({
  isProjectOverlayOpen: getProjectOverlayState(state)
});

const mapDispatchToProps = {
  switchCreateProjectOverlay
};

export default connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(CreateProjectButton);
