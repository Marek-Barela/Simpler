import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import logoIcon from "../../assets/images/simpler-icon.png";
import { faPlus, faCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./Dashboard.module.css";

const Dashboard: FC = () => {
  const {
    container,
    navbar,
    navbarWrapper,
    iconContainer,
    navigationContainer,
    navigationButton,
    contentWrapper,
    aside,
    content
  } = styles;
  return (
    <div className={container}>
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
      <main className={contentWrapper}>
        <aside className={aside}>sidebar</aside>
        <section className={content}>content</section>
      </main>
    </div>
  );
};

export default Dashboard;
