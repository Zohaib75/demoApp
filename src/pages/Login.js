import React, { useContext } from "react";
import { AuthContext, CredContext } from "../common/contexts";
import Form from "../components/Form";
import { useHistory } from "react-router-dom";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const { cred } = useContext(CredContext);
  const history = useHistory();

  const login = ({ email, password }) => {
    if (email === cred.email && password === cred.password) {
      setAuth(true);
      history.push({
        pathname: "/home",
      });
    }
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
    </>
  );
}

export default Login;
