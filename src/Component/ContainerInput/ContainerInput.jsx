import React from "react";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import { useContext } from "react";
import { ActiveContext } from "../../Context/ActiveContext";
import HeadTable from "../HeadTable/HeadTable";
import "./ContainerInput.css";

const ContainerInput = ({ lang }) => {
  const { displayDateTime, activeDateTime } = useContext(ActiveContext);
  return (
    <>
      <input onClick={displayDateTime} readOnly type="text" />
      <div
        className="containerTable"
        style={activeDateTime ? { display: "block" } : { display: "none" }}
      >
        <HeadTable />
        <DateTimePicker lang={lang} />
      </div>
    </>
  );
};

export default ContainerInput;
