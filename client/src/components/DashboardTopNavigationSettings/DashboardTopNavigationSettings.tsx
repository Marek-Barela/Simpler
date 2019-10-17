import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { logout } from "./DashboardTopNavigationSettings-action";
import { connect } from "react-redux";
import styles from "./DashboardTopNavigationSettings.module.css";

interface DispatchProps {
  logout: () => void;
}

type Props = DispatchProps;

const DashboardTopNavigationSettings: FC<Props> = ({ logout }) => {
  const handleLogoutClick = () => {
    logout();
  };

  const { settings, list, listItem } = styles;
  return (
    <div className={settings}>
      <ul className={list}>
        <li className={listItem} onClick={handleLogoutClick}>
          <FontAwesomeIcon icon={faDoorOpen} />
          Logout
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = {
  logout
};

export default connect(
  null,
  mapDispatchToProps
)(DashboardTopNavigationSettings);
