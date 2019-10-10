import React, { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";
import { Route, Switch } from "react-router-dom";
import { loadUser } from "./features/authorization/authorization-actions";
import store from "./redux/store";

const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={() => <LandingPage />} />
      <Route exact path="/login" component={() => <LoginPage />} />
      <Route exact path="/registration" component={() => <RegistrationPage />} />
      <ProtectedRoute exact path="/dashboard" component={<DashboardPage />} />
      <Route component={() => <NotFound />} />
    </Switch>
  );
};

export default App;
