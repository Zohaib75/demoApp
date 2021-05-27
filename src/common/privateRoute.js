import React, { useContext } from "react";
import { AuthContext } from "./contexts";
import { Route, Redirect } from "react-router-dom";

export default function     PrivateRoute({ component: Component, ...rest }) {
  const { auth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
