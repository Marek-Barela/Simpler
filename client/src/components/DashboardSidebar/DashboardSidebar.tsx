import React, { FC } from "react";
import DashboardSidebarFilters from "../DashboardSidebarFilters";
import DashboardSidebarDropdown from "../DashboardSidebarDropdown";
import { getSidebarMenu } from "../DashboardTopNavigationMenu//DashboardTopNavigationMenu-selectors";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./DashboardSidebar.module.css";

interface DispatchProps {
  isMenuNavbarActive: boolean;
}

type Props = DispatchProps;

const DashboardSidebar: FC<Props> = ({ isMenuNavbarActive }) => {
  const { aside, asideLeft } = styles;
  const asideStyles = aside + ` ${isMenuNavbarActive && asideLeft}`;
  return (
    <aside className={asideStyles}>
      <DashboardSidebarFilters />
      <DashboardSidebarDropdown />
    </aside>
  );
};

const mapStateToProps = (state: RootState) => ({
  isMenuNavbarActive: getSidebarMenu(state)
});

export default connect(mapStateToProps)(DashboardSidebar);
