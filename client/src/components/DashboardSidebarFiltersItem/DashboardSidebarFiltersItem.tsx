import React, { FC } from "react";
import FontAwesomeIcon from "../FontAwesomeIcon";
import styles from "./DashboardSidebarFiltersItem.module.css";

interface ParentProps {
  name: string;
  icon: any;
}

type Props = ParentProps;

const { item } = styles;
const DashboardSidebarFiltersItem: FC<Props> = ({ name, icon }) => {
  return (
    <li className={item}>
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      {name}
    </li>
  );
};

export default DashboardSidebarFiltersItem;
