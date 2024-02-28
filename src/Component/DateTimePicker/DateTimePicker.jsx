import React from "react";
import "./DateTimePicker.css";

const DateTimePicker = ({ lang = "eng" }) => {
  const fr = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const eng = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let displayTh;

  if (lang === "fr") {
    displayTh = fr.map((day, index) => <th key={index}>{day}</th>);
  } else {
    displayTh = eng.map((day, index) => <th key={index}>{day}</th>);
  }

  return (
    <table>
      <thead>
        <tr>{displayTh}</tr>
      </thead>
    </table>
  );
};

export default DateTimePicker;
