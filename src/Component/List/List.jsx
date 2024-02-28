import React, { useContext } from "react";
import { ActiveContext } from "../../Context/ActiveContext";

const List = ({ typeDate, list }) => {
  const { activeListMonth, activeListYear, displayYearList, displayMonthList } =
    useContext(ActiveContext);
  let styleList;

  if (typeDate === "month") {
    styleList = {
      display: activeListMonth ? "block" : "none",
    };
  } else {
    styleList = {
      display: activeListYear ? "block" : "none",
    };
  }

  const changeModeActive = () => {
    if (typeDate === "month") {
      return displayMonthList();
    } else {
      return displayYearList();
    }
  };

  const displayList = list.map((value, index) => <li key={index}>{value}</li>);

  return (
    <div onClick={changeModeActive} style={{ ...styleList }}>
      <ul>{displayList}</ul>
    </div>
  );
};

export default List;
