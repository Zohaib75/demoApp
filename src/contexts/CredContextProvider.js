import { useState } from "react";
import { CredContext } from "./CredContext";

export const CredContextProvider = ({ children }) => {
  const [creds, setCreds] = useState([]);
  const value = { creds, setCreds };
  return <CredContext.Provider value={value}>{children}</CredContext.Provider>;
};
