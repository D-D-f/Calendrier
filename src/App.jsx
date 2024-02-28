import "./App.css";
import React from "react";
import ActiveContextProvider from "./Context/ActiveContext";

const App = () => {
  return (
    <ActiveContextProvider>
      <div></div>
    </ActiveContextProvider>
  );
};

export default App;
