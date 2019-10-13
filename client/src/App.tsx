import React, { FC, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./components/NotFound";
import { Route, Switch } from "react-router-dom";
import { loadUser } from "./features/authorization/authorization-actions";
import store from "./redux/store";

const App: FC = () => {
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      store.dispatch(loadUser());
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={() => <LandingPage />} />
      <Route exact path="/login" component={() => <LoginPage />} />
      <Route exact path="/registration" component={() => <RegistrationPage />} />
      <Route exact path="/dashboard" component={() => <DashboardPage />} />
      <Route component={() => <NotFound />} />
    </Switch>
  );
};

export default App;
