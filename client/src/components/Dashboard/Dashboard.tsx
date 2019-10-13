import React, { FC, useEffect } from "react";
import DashboardSidebar from "../DashboardSidebar";
import DashboardContent from "../DashboardContent";
import DashboardTopNavigation from "../DashboardTopNavigation";
import RedirectRule from "../RedirectRule";
import { fetchUserProjects } from "./Dashboard-actions";
import { getUserDetails } from "../../selectors/getUserData";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import styles from "./Dashboard.module.css";

interface StateProps {
  user: any;
}

interface DispatchProps {
  fetchUserProjects: (paylaod: string) => void;
}

type Props = StateProps & DispatchProps;

const Dashboard: FC<Props> = ({ fetchUserProjects, user }) => {
  useEffect(() => {
    if (user._id !== null) {
      fetchUserProjects(user._id);
    }
  }, [fetchUserProjects, user]);
  const { container, contentWrapper } = styles;
  return (
    <>
      <RedirectRule redirectPathIfNotAuthorized="/login" />
      <div className={container}>
        <DashboardTopNavigation />
        <main className={contentWrapper}>
          <DashboardSidebar />
          <DashboardContent />
        </main>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: getUserDetails(state)
});

const mapDispatchToProps = {
  fetchUserProjects
};

export default connect<StateProps, DispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
