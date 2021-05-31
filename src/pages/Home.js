import React, { useContext } from "react";
import { UserContext } from "../common/contexts";
import { Button } from "../styles/Button";

function Home() {
  const { setUser } = useContext(UserContext);

  const logout = () => {
    setUser({ email: "", password: "", auth: false });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}

export default Home;
