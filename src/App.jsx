import "./App.css";
import React from "react";
import ActiveContextProvider from "./Context/ActiveContext";
import ContainerInput from "./Component/ContainerInput/ContainerInput";

const App = () => {
  return (
    <ActiveContextProvider>
      <ContainerInput />
    </ActiveContextProvider>
  );
};

export default App;
