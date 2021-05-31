import React, { useContext } from "react";
import { UserContext } from "./contexts";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.auth ? (
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
