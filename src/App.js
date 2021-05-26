import "./App.css";
import React, { useState } from "react";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AuthContext, CredContext } from "./common/contexts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./common/privateRoute";

function App() {
  const [auth, setAuth] = useState(false);
  const [cred, setCred] = useState({ email: "", password: "" });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Router>
        <Switch>
          <div className="App">
            <CredContext.Provider value={{ cred, setCred }}>
              <Route exact path={`/auth`} component={Auth} />
              <Route path={`/auth/login`} component={Login} />
              <Route path={`/auth/signup`} component={Signup} />
            </CredContext.Provider>

            <PrivateRoute exact path={`/home`} component={Home} />
          </div>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
