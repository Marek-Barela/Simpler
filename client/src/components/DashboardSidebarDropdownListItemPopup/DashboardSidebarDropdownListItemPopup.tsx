import React, { FC } from "react";
import styles from "./DashboardSidebarDropdownListItemPopup.module.css";

interface ParentProps {
  setPopupIsVisible: (action: boolean) => void;
  id: string | undefined;
}

type Props = ParentProps;

const DashboardSidebarDropdownListItemPopup: FC<Props> = ({
  setPopupIsVisible,
  id
}) => {
  const handleCancelClick = () => {
    setPopupIsVisible(false);
  };

  const handleDeleteClick = () => {
    console.log(id);
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

export default DashboardSidebarDropdownListItemPopup;
