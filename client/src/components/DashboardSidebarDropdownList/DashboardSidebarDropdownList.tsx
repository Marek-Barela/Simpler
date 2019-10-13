import React, { FC } from "react";
import styles from "./DashboardSidebarDropdownList.module.css";

interface ParentProps {
  listStyling: string;
}

type Props = ParentProps;

const DashboardSidebarDropdownList: FC<Props> = ({ listStyling }) => {
  const { dropdownItem } = styles;
  return (
    <ul className={listStyling}>
      <li className={dropdownItem}>item</li>
    </ul>
  );
};

export default DashboardSidebarDropdownList;
