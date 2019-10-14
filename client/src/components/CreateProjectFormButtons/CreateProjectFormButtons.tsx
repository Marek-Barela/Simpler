import React, { FC } from "react";
import { switchCreateProjectOverlay } from "../CreateProjectOverlay/CreateProjectOverlay-actions";
import { RootState } from "../../redux/root-reducer";
import { connect } from "react-redux";
import styles from "./CreateProjectFormButtons.module.css";

interface ParentProps {
  buttonIsDisabled: boolean;
}

interface DispatchProps {
  switchCreateProjectOverlay: (action: boolean) => void;
}

type Props = ParentProps & DispatchProps;

const CreateProjectFormButtons: FC<Props> = ({
  buttonIsDisabled,
  switchCreateProjectOverlay
}) => {
  const handleCandelProjectCLick = () => {
    switchCreateProjectOverlay(false);
  };

  const { button, createButton } = styles;
  const createButtonStyling = button + " " + createButton;
  return (
    <>
      <button
        type="button"
        className={button}
        onClick={handleCandelProjectCLick}
      >
        Cancel
      </button>
      <button
        type="submit"
        className={createButtonStyling}
        disabled={buttonIsDisabled}
      >
        Add
      </button>
    </>
  );
};

const mapDispatchToProps = {
  switchCreateProjectOverlay
};

export default connect<{}, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(CreateProjectFormButtons);
