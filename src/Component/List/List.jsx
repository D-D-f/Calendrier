import React, { useContext } from "react";
import "./List.css";
import { ActiveContext } from "../../Context/ActiveContext";
import UseDateHooks from "../../CustomHooks/UseDateHooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const List = ({ typeDate, list }) => {
  const { activeListMonth, activeListYear, displayYearList, displayMonthList } =
    useContext(ActiveContext);
  let styleList;
  const { years, currentMonth, setCurrentMonth, setCurrentYear, currentYear } =
    UseDateHooks();

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

  const displayList = list.map((value, index) => (
    <li
      onClick={() =>
        typeDate === "month" ? setCurrentMonth(index) : setCurrentYear(index)
      }
      key={index}
    >
      {value}
    </li>
  ));

  return (
    <div onClick={changeModeActive}>
      <div className="containerList">
        <span>
          {typeDate === "month" ? list[currentMonth] : years[currentYear]}
        </span>
        <FontAwesomeIcon
          icon={faSortDown}
          size="xs"
          style={{ marginLeft: "5px" }}
        />
        <ul className="listStyle" style={{ ...styleList }}>
          {displayList}
        </ul>
      </div>
    </div>
  );
};

export default List;
