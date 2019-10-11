import React, { FC } from "react";
import logoIcon from "../../assets/images/simpler-icon.png";
import styles from "./Dashboard.module.css";

const Dashboard: FC = () => {
  const {
    container,
    navBar,
    navbarWrapper,
    iconContainer,
    navigationConntainer,
    contentWrapper,
    aside,
    content
  } = styles;
  return (
    <div className={container}>
      <nav className={navBar}>
        <div className={navbarWrapper}>
          <div className={iconContainer}>
            <img src={logoIcon} alt="" />
          </div>
          <div className={navigationConntainer}>icon</div>
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
