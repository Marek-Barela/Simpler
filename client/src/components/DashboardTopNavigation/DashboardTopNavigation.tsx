import React, { useState } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import SettingsDropdown from "../DashboardTopNavigationSettings";
import logoIcon from "../../assets/images/simpler-icon.png";
import { faPlus, faCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./DashboardTopNavigation.module.css";

const DashboardTopNavigation = () => {
  const {
    overlay,
    navbar,
    navbarWrapper,
    iconContainer,
    navigationContainer,
    navigationButton
  } = styles;

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleSettingsClick = (action: boolean): void => {
    setMenuIsOpen(action);
  };

  return (
    <nav className={navbar}>
      <div className={navbarWrapper}>
        <div
          className={iconContainer}
          onClick={() => handleSettingsClick(false)}
        >
          <img src={logoIcon} alt="" />
        </div>
        <div className={navigationContainer}>
          {menuIsOpen ? (
            <div
              className={overlay}
              onClick={() => handleSettingsClick(false)}
            />
          ) : null}
          <button
            className={navigationButton}
            onClick={() => handleSettingsClick(false)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            className={navigationButton}
            onClick={() => handleSettingsClick(!menuIsOpen)}
          >
            <FontAwesomeIcon icon={faCog} />
          </button>
          {menuIsOpen ? <SettingsDropdown /> : null}
        </div>
      </div>
    </nav>
  );
};

export default DashboardTopNavigation;
