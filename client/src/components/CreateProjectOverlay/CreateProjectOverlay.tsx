import React, { FC } from "react";
import { getProjectOverlayState } from "../CreateProjectOverlay/CreateProjectOverlay-selectors";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./CreateProjectOverlay.module.css";

interface StateProps {
  isProjectOverlayOpen: boolean;
}

type Props = StateProps;

const CreateProjectOverlay: FC<Props> = ({ isProjectOverlayOpen }) => {
  const { overlay, createProjectContainer } = styles;
  return isProjectOverlayOpen ? (
    <div className={overlay}>
      <div className={createProjectContainer}>Text</div>
    </div>
  ) : (
    <div></div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isProjectOverlayOpen: getProjectOverlayState(state)
});

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  {}
)(CreateProjectOverlay);
