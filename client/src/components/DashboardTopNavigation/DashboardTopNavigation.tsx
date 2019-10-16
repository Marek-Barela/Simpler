import React from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import logoIcon from "../../assets/images/simpler-icon.png";
import { faPlus, faCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./DashboardTopNavigation.module.css";

const DashboardTopNavigation = () => {
  const {
    navbar,
    navbarWrapper,
    iconContainer,
    navigationContainer,
    navigationButton
  } = styles;
  return (
    <nav className={navbar}>
      <div className={navbarWrapper}>
        <div className={iconContainer}>
          <img src={logoIcon} alt="" />
        </div>
        <div className={navigationContainer}>
          <button className={navigationButton}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className={navigationButton}>
            <FontAwesomeIcon icon={faCog} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardTopNavigation;
