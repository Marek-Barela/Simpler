import React, { FC } from "react";
import NewProjectButton from "../NewProjectButton";
import DropdownItem from "../DashboardSidebarDropdownListItem";
import { getUserDashboardData } from "../Dashboard/Dashboard-selector";
import { DashboardState } from "../Dashboard/Dashboard-reducer";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";

interface ParentProps {
  listStyling: string;
}

interface StateProps {
  dashboardData: DashboardState;
}

type Props = ParentProps & StateProps;

const DashboardSidebarDropdownList: FC<Props> = ({
  listStyling,
  dashboardData
}) => {
  const { projects = [] } = dashboardData;
  return (
    <ul className={listStyling}>
      {projects.map(project => {
        const { _id } = project;
        return <DropdownItem key={_id} {...project} />;
      })}
      <NewProjectButton />
    </ul>
  );
};

const mapStateToProps = (state: RootState) => ({
  dashboardData: getUserDashboardData(state)
});

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  {}
)(DashboardSidebarDropdownList);
