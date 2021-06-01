import React, { useContext, useRef } from "react";
import { UserContext } from "../contexts/UserContext";
import { CredContext } from "../contexts/CredContext";
import Form from "../components/Form";
import { useHistory } from "react-router-dom";
import { Card, CardLink } from "../styles/Card";
import { Span } from "../styles/Span";

function Login() {
  const { setUser } = useContext(UserContext);
  const { creds } = useContext(CredContext);
  const history = useHistory();
  const errorRef = useRef("");

  const login = ({ email, password }) => {
    let cred = creds.find(
      (cred) => cred.email === email && cred.password === password
    );
    if (cred !== undefined) {
      setUser({ email, password, auth: true });
      history.push({
        pathname: "/home",
      });
    } else {
      errorRef.current.textContent = "Email or password do not match";
    }
  };

  return (
    <Card>
      <h1>Please, log in!</h1>

      <Span ref={errorRef}></Span>
      <Form
        inputs={[
          {
            name: "email",
            placeholder: "Email",
            type: "text",
          },
          {
            name: "password",
            placeholder: "Password",
            type: "password",
          },
        ]}
        button={{
          name: "Login",
        }}
        onSubmit={login}
      />

      <CardLink to="/auth/signup">Don't have an account?</CardLink>
    </Card>
  );
}

export default Login;
