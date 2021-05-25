import React, { useState } from "react";
import { CredContext } from "../common/contexts";
import Login from "../components/Login";
import Signup from "../components/Signup";

export default function Auth() {
  const [cred, setCred] = useState({ email: "", password: "" });

  return (
    <CredContext.Provider value={{ cred, setCred }}>
      {cred.email !== "" && cred.password !== "" ? <Login /> : <Signup />}
    </CredContext.Provider>
  );
}
