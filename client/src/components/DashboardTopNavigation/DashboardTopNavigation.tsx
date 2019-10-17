import React, { useState, FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import SettingsDropdown from "../DashboardTopNavigationSettings";
import logoIcon from "../../assets/images/simpler-icon.png";
import { switchCreateQuickTaskOverlay } from "../QuickTaskOverlay/QuickTaskOverlay-actions";
import { connect } from "react-redux";
import { faPlus, faCog } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../redux/root-reducer";
import styles from "./DashboardTopNavigation.module.css";

interface DispatchProp {
  switchCreateQuickTaskOverlay: (action: boolean) => void;
}

type Props = DispatchProp;

const DashboardTopNavigation: FC<Props> = ({
  switchCreateQuickTaskOverlay
}) => {
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

  const handleQuickTaskClick = (action: boolean) => {
    switchCreateQuickTaskOverlay(action);
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
            onClick={() => handleQuickTaskClick(true)}
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

const mapDispatchToProps = {
  switchCreateQuickTaskOverlay
};

export default connect<{}, DispatchProp, {}, RootState>(
  null,
  mapDispatchToProps
)(DashboardTopNavigation);
