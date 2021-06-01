import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { UserContextProvider } from "./contexts/UserContextProvider";
import { CredContextProvider } from "./contexts/CredContextProvider";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./routes/privateRoute";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/auth/login" />
          <PrivateRoute path={`/home`} component={Home} />

          <CredContextProvider>
            <Route path={`/auth/login`} component={Login} />
            <Route path={`/auth/signup`} component={Signup} />
          </CredContextProvider>
        </Switch>
      </Router>
    </UserContextProvider>
  );
}

export default App;
