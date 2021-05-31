import { createContext } from "react";

export const CredContext = createContext([{ email: "", password: "" }]);

export const UserContext = createContext({
  email: "",
  password: "",
  auth: false,
});
