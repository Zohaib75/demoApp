import React, { useContext } from "react";
import { CredContext } from "../common/contexts";
import Form from "./Form";

function Signup() {
  const { setCred } = useContext(CredContext);

  const signup = ({ email, password }) => {
    setCred({ email, password });
  };
  return (
    <>
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
    </>
  );
}

export default Signup;
