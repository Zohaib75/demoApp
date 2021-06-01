import React, { useContext, useRef } from "react";
import { CredContext } from "../contexts/CredContext";
import Form from "../components/Form";
import { useHistory } from "react-router-dom";
import { Card, CardLink } from "../styles/Card";
import { Span } from "../styles/Span";

function Signup() {
  const { creds, setCreds } = useContext(CredContext);
  const history = useHistory();
  const errorRef = useRef("");

  const signup = ({ email, password }) => {
    let cred = creds.find((cred) => cred.email === email);
    if (cred === undefined) {
      setCreds((prevCreds) => [...prevCreds, { email, password }]);

      history.push({
        pathname: "/auth/login",
      });
    } else {
      errorRef.current.textContent = "User with email already exists";
    }
  };

  return (
    <Card>
      <h1>Please, Sign Up!</h1>

      <Span ref={errorRef}>{' '}</Span>
      <Form
        inputs={[
          { name: "email", placeholder: "Email", type: "text" },
          { name: "password", placeholder: "Password", type: "password" },
          {
            name: "confirmPassword",
            placeholder: "Confirm Password",
            type: "password",
          },
        ]}
        button={{
          name: "Signup",
        }}
        onSubmit={signup}
      />

      <CardLink to="/auth/login">I already have an account</CardLink>
    </Card>
  );
}

export default Signup;
