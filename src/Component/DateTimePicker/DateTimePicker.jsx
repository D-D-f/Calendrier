import React from "react";
import HeadTable from "../HeadTable/HeadTable";
import "./DateTimePicker.css";

const DateTimePicker = () => {
  const month = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const displayTh = month.map((day, index) => <th key={index}>{day}</th>);

  return (
    <div>
      <HeadTable />
      <table>
        <thead>
          <tr>{displayTh}</tr>
        </thead>
      </table>
    </div>
  );
};

export default DateTimePicker;
