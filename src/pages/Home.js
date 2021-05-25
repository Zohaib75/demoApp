import React, { useContext } from "react";
import { AuthContext } from "../common/contexts";

function Home() {
  const { setAuth } = useContext(AuthContext);

  const logout = () => {
    setAuth(false);
  };
  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Home;
