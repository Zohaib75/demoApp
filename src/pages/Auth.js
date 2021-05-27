import React, { useContext } from "react";
import { CredContext } from "../common/contexts";
import { Redirect } from "react-router-dom";

export default function Auth() {
  const { cred } = useContext(CredContext);

  return cred.email !== "" && cred.password !== "" ? (
    <Redirect to="/auth/login" />
  ) : (
    <Redirect to="/auth/signup" />
  );
}
