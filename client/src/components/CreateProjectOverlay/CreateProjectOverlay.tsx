import React, { FC } from "react";
import { getProjectOverlayState } from "../CreateProjectOverlay/CreateProjectOverlay-selectors";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./CreateProjectOverlay.module.css";

interface ParentProps {
  children: JSX.Element | JSX.Element[];
}

interface StateProps {
  isProjectOverlayOpen: boolean;
}

type Props = ParentProps & StateProps;

const CreateProjectOverlay: FC<Props> = ({
  isProjectOverlayOpen,
  children
}) => {
  const { overlay } = styles;
  return !isProjectOverlayOpen ? (
    <div className={overlay}>{children}</div>
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
