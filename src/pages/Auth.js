import React from "react";
import { Redirect } from "react-router-dom";

export default function Auth() {
  return <Redirect to="/auth/login" />;
}
