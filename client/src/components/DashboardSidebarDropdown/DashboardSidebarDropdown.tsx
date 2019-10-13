import React, { useState } from "react";
import DashboardSidebarDropdownButton from "../DashboardSidebarDropdownButton";
import DashboardSidebarDropdownList from "../DashboardSidebarDropdownList";
import styles from "./DashboardSidebarDropdown.module.css";

const DashboardSidebarDropdown = () => {
  const [dropdownIsVisible, setDropdownIsVisible] = useState(true);
  
  const switchDropdownVisiblity = () => {
    setDropdownIsVisible(!dropdownIsVisible);
  };

  const {
    dropdown,
    dropdownButtonCaret,
    dropdownButtonCaretRotate,
    dropdownList,
    dropdownListHidden
  } = styles;

  const caretStyling = dropdownButtonCaret + ` ${dropdownIsVisible && dropdownButtonCaretRotate}`;
  const dropdownListStyles = dropdownList + ` ${!dropdownIsVisible && dropdownListHidden}`;

  return (
    <div className={dropdown}>
      <DashboardSidebarDropdownButton
        caretStyling={caretStyling}
        switchDropdownVisiblity={switchDropdownVisiblity}
      />
      <DashboardSidebarDropdownList listStyling={dropdownListStyles} />
    </div>
  );
};

export default DashboardSidebarDropdown;
