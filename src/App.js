import React from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useStateValue } from "./Datalayer/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    //BEM
    <div className="app">{user ? <Profile /> : <Login />}</div>
  );
}

export default App;
