import React, { FC } from "react";
import { getUserData } from "../../selectors/getUserData";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { User } from "../../features/__commonModels__/userModel";

interface StateProps {
  authorization: User;
}

interface ParentProps {
  redirectPathIfNotAuthorized: string;
}

type Props = StateProps & ParentProps;

const RedirectRule: FC<Props> = ({
  authorization,
  redirectPathIfNotAuthorized
}) => {
  const { isAuthenticated, token } = authorization;
  return isAuthenticated && token !== null ? (
    <Redirect exact to="/dashboard" />
  ) : (
    <Redirect exact to={redirectPathIfNotAuthorized} />
  );
};

const mapStateToProps = (state: RootState) => ({
  authorization: getUserData(state)
});

export default connect<StateProps, {}, {}, RootState>(
  mapStateToProps,
  {}
)(RedirectRule);
