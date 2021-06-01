import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "", auth: false });
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
