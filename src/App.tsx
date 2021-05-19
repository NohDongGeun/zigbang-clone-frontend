import { useReactiveVar } from "@apollo/client";
import React from "react";
import { isLoggedInVar, sidebarVar } from "./apollo";
import LoggedInRouter from "./Routers/Logged-in-router.tsx";
import LoggedOutRouter from "./Routers/Logged-out-router.tsx";

function App() {
  const sidevar = useReactiveVar(sidebarVar);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <div className={`w-screen h-full relative overflow-x-hidden min-w-320`}>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className={`fixed top-0 z-40 left-0 ${
          sidevar ? "flex w-screen h-screen " : "hidden"
        }`}
      ></div>
      {isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}
    </div>
  );
}

export default App;
