import React from "react";
import "./HeadTable.css";
import List from "../../Component/List/List.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import UseDateHooks from "../../CustomHooks/UseDateHooks.js";

const HeadTable = () => {
  const { decrementTheMonth, incrementTheMonth, years, months } =
    UseDateHooks();

  return (
    <div className="HeadTable">
      <FontAwesomeIcon
        onClick={decrementTheMonth}
        icon={faCaretLeft}
        size="xs"
      />
      <List typeDate="month" list={months} />
      <List typeDate="year" list={years} />
      <FontAwesomeIcon
        onClick={incrementTheMonth}
        icon={faCaretRight}
        size="xs"
      />
    </div>
  );
};

export default HeadTable;
