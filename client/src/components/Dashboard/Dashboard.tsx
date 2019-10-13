import React, { FC, useEffect } from "react";
import DashboardSidebar from "../DashboardSidebar";
import DashboardContent from "../DashboardContent";
import DashboardTopNavigation from "../DashboardTopNavigation";
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
      setTimeout(() => {
        console.log("running");
        //fetchUserProjects(user._id);
      }, 12000);
    }
  }, [fetchUserProjects, user]);

  const test = () => {
    fetchUserProjects(user._id);
  };

  const { container, contentWrapper } = styles;
  console.log(user);
  return (
    <div className={container}>
      <DashboardTopNavigation />
      <main className={contentWrapper}>
        <button onClick={() => test()}></button>
        <DashboardSidebar />
        <DashboardContent />
      </main>
    </div>
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
