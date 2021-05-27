import React, { useContext } from "react";
import { CredContext } from "../common/contexts";
import Form from "../components/Form";
import { useHistory } from "react-router-dom";
import { Card } from "../styles/card";

function Signup() {
  const { setCred } = useContext(CredContext);
  const history = useHistory();

  const signup = ({ email, password }) => {
    setCred({ email, password });
    history.push({
      pathname: "/auth",
    });
  };

  return (
    <Card>
      <h1>Please, Sign Up!</h1>

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
    </Card>
  );
}

export default Signup;
