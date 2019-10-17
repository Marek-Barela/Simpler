import React, { FC } from "react";
import { getQuickTaskOverlayState } from "./QuickTaskOverlay-selectors";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./QuickTaskOverlay.module.css";

interface ParentProps {
  children: JSX.Element | JSX.Element[];
}

interface StateProps {
  isQuickTaskOverlayOpen: boolean;
}

type Props = ParentProps & StateProps;

const CreateProjectOverlay: FC<Props> = ({
  isQuickTaskOverlayOpen,
  children
}) => {
  const { overlay } = styles;
  return isQuickTaskOverlayOpen ? (
    <div className={overlay}>{children}</div>
  ) : null;
};

const mapStateToProps = (state: RootState) => ({
  isQuickTaskOverlayOpen: getQuickTaskOverlayState(state)
});

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  {}
)(CreateProjectOverlay);
