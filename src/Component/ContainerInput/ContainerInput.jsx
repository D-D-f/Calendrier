import React from "react";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import { useContext } from "react";
import { ActiveContext } from "../../Context/ActiveContext";
import "./ContainerInput.css";

const ContainerInput = () => {
  const { displayDateTime, activeDateTime } = useContext(ActiveContext);

  return (
    <>
      <input onClick={displayDateTime} readOnly type="text" />
      <div
        className="containerTable"
        style={activeDateTime ? { display: "block" } : { display: "none" }}
      >
        <DateTimePicker />
      </div>
    </>
  );
};

export default ContainerInput;
