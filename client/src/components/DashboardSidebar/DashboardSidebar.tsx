import React, { useState } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./DashboardSidebar.module.css";

const DashboardSidebar = () => {

  const [dropdownIsVisible, setDropdownIsVisible] = useState(true);

  const switchDropdownVisiblity = () => {
    setDropdownIsVisible(!dropdownIsVisible)
  }

  const { 
    aside, 
    projectsDropdown, 
    dropdownButton, 
    dropdownButtonCaret,
    dropdownButtonCaretRotate,
    dropdownList,
    dropdownListHidden,
    dropdownItem
  } = styles;
  const caretStyling = dropdownButtonCaret + ` ${dropdownIsVisible && dropdownButtonCaretRotate}`;
  const dropdownListStyles = dropdownList + ` ${!dropdownIsVisible && dropdownListHidden}`;
  return (
    <aside className={aside}>
      <div className={projectsDropdown}>
        <button 
          className={dropdownButton} 
          onClick={() => switchDropdownVisiblity()}
        >
          <span className={caretStyling}>
            <FontAwesomeIcon icon={faAngleRight}/>
          </span>
          Projects
        </button>
        <ul className={dropdownListStyles}>
          <li className={dropdownItem}>item</li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
