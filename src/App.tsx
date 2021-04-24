import { useReactiveVar } from "@apollo/client";
import React from "react";
import { isLoggedInVar } from "./apollo";
import Routers from "./Routers";
import LoggedInRouter from "./Routers/Logged-in-router.tsx";
import LoggedOutRouter from "./Routers/Logged-out-router.tsx";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
  // return <Routers />;
}

export default App;
