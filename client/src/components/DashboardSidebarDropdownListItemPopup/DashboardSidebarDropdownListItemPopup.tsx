import React, { FC } from "react";
import { deleteProject } from "./DashboardSidebarDropdownListItemPopup-actions";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./DashboardSidebarDropdownListItemPopup.module.css";

interface ParentProps {
  setPopupIsVisible: (action: boolean) => void;
  id: string;
}

interface DispatchProps {
  deleteProject: (action: string) => void;
}

type Props = ParentProps & DispatchProps;

const ListItemPopup: FC<Props> = ({ setPopupIsVisible, id, deleteProject }) => {
  const handleCancelClick = () => {
    setPopupIsVisible(false);
  };

  const handleDeleteClick = () => {
    setPopupIsVisible(false);
    deleteProject(id);
  };

  const { popup, overlay, button, deleteButton } = styles;
  const cancelButtonStyling = button + " " + deleteButton;
  return (
    <>
      <div className={overlay} onClick={handleCancelClick} />
      <div className={popup}>
        <p>Are you sure you want to delete this project ?</p>
        <button className={button} onClick={handleCancelClick}>
          Cancel
        </button>
        <button className={cancelButtonStyling} onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  deleteProject
};

export default connect<{}, DispatchProps, {}, RootState>(
  null,
  mapDispatchToProps
)(ListItemPopup);
