import React, { useContext } from "react";
import "./List.css";
import { ActiveContext } from "../../Context/ActiveContext";
import UseDateHooks from "../../CustomHooks/UseDateHooks";

const List = ({ typeDate, list }) => {
  const { activeListMonth, activeListYear, displayYearList, displayMonthList } =
    useContext(ActiveContext);
  const { currentMonth, currentYear } = UseDateHooks();
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
    <div onClick={changeModeActive}>
      <div style={{ position: "relative", fontSize: "12px" }}>
        {list[typeDate === "month" ? currentMonth : currentYear]}
        <ul className="listStyle" style={{ ...styleList }}>
          {displayList}
        </ul>
      </div>
    </div>
  );
};

export default List;
