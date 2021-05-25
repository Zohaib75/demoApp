import React, { useContext } from "react";
import { AuthContext, CredContext } from "../common/contexts";
import Form from "./Form";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const { cred } = useContext(CredContext);

  const login = ({ email, password }) => {
    if (email === cred.email && password === cred.password) setAuth(true);
  };

  return (
    <>
      <h1>Please, log in!</h1>

      <Form
        inputs={[
          {
            name: "email",
            placeholder: "Email",
            type: "text",
            value: cred.email,
          },
          {
            name: "password",
            placeholder: "Password",
            type: "password",
            value: cred.password,
          },
        ]}
        button={{
          name: "Login",
        }}
        onSubmit={login}
      />
    </>
  );
}

export default Login;
