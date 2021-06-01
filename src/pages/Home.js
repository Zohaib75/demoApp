import React, { useContext } from "react";
import { AuthContext } from "../common/contexts";
import { Button } from "../styles/button";

function Home() {
  const { setAuth } = useContext(AuthContext);

  const logout = () => {
    setAuth(false);
  };
  return <Button onClick={logout}>Logout</Button>;
}

export default Home;
