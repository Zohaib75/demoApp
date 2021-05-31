import "./App.css";
import React, { useState } from "react";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { UserContext, CredContext } from "./common/contexts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./common/privateRoute";

function App() {
  const [user, setUser] = useState({ email: "", password: "", auth: false });
  const [creds, setCreds] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/auth" />
          <PrivateRoute path={`/home`} component={Home} />

          <CredContext.Provider value={{ creds, setCreds }}>
            <Route exact path={`/auth`} component={Auth} />
            <Route path={`/auth/login`} component={Login} />
            <Route path={`/auth/signup`} component={Signup} />
          </CredContext.Provider>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
