import React from "react";
import "./DateTimePicker.css";

const DateTimePicker = () => {
  const month = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const displayTh = month.map((day, index) => <th key={index}>{day}</th>);

  return (
    <table>
      <thead>
        <tr>{displayTh}</tr>
      </thead>
    </table>
  );
};

export default DateTimePicker;
