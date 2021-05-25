import "./App.css";
import React, { useState } from "react";
import Auth from "./pages/Auth";
import { AuthContext } from "./common/contexts";
import Home from "./pages/Home";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <div className="App">{auth ? <Home /> : <Auth />}</div>
    </AuthContext.Provider>
  );
}

export default App;
