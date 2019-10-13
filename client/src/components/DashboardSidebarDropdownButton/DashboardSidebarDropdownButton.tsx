import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./DashboardSidebarDropdownButton.module.css";

interface ParentProps {
  caretStyling: string;
  switchDropdownVisiblity: () => void;
}

type Props = ParentProps;

const DashboardSidebarDropdownButton: FC<Props> = ({
  caretStyling,
  switchDropdownVisiblity
}) => {
  const { dropdownButton } = styles;
  return (
    <button
      className={dropdownButton}
      onClick={() => switchDropdownVisiblity()}
    >
      <span className={caretStyling}>
        <FontAwesomeIcon icon={faAngleRight} />
      </span>
      Projects
    </button>
  );
};

export default DashboardSidebarDropdownButton;
