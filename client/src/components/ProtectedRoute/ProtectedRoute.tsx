import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { getUserData } from "../../selectors/getUserData";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { User } from "../../features/__commonModels__/userModel";

interface ParentProps {
  exact: boolean;
  path: string;
  component: JSX.Element;
}

interface StateProps {
  authentication: User;
}

type Props = ParentProps & StateProps;

const ProtectedRoute: FC<Props> = ({ path, exact, component, authentication }) => {
  const { isAuthenticated, isFetching, token } = authentication;
  return token === null || (!isAuthenticated && !isFetching) ? (
    <Redirect to="/login" />
  ) : (
    <Route exact={exact} path={path} component={() => component} />
  );
};

const mapStateToProps = (state: RootState) => ({
  authentication: getUserData(state)
});

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  {}
)(ProtectedRoute);
