import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import { switchMenuSidebar } from "../DashboardTopNavigationMenu/DashboardTopNavigationMenu-actions";
import { getSidebarMenu } from "../DashboardTopNavigationMenu//DashboardTopNavigationMenu-selectors";
import { connect } from "react-redux";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../redux/root-reducer";
import styles from "./DashboardTopNavigationMenu.module.css";

interface ParentProps {
  handleSettingsClick: (action: boolean) => void;
}

interface StateProps {
  isMenuNavbarActive: boolean;
}

interface DispatchProps {
  switchMenuSidebar: (action: boolean) => void;
}

type Props = ParentProps & StateProps & DispatchProps;

const DashboardTopNavigationMenu: FC<Props> = ({
  isMenuNavbarActive,
  switchMenuSidebar,
  handleSettingsClick
}) => {
  const handleSwitchMenuClick = () => {
    handleSettingsClick(false);
    switchMenuSidebar(isMenuNavbarActive);
  };

  const { button } = styles;
  return (
    <button onClick={handleSwitchMenuClick} className={button}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

const mapStateToProps = (state: RootState) => ({
  isMenuNavbarActive: getSidebarMenu(state)
});

const mapDispatchToProps = {
  switchMenuSidebar
};

export default connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(DashboardTopNavigationMenu);
