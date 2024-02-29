import React from "react";
import "./HeadTable.css";
import List from "../../Component/List/List.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import UseDateHooks from "../../CustomHooks/UseDateHooks.js";

const HeadTable = () => {
  const { months, years } = UseDateHooks();

  return (
    <div className="HeadTable">
      <FontAwesomeIcon
        icon={faCaretLeft}
        size="xs"
        style={{ cursor: "pointer" }}
      />
      <List typeDate="month" list={months} />
      <List typeDate="year" list={years} />
      <FontAwesomeIcon
        icon={faCaretRight}
        size="xs"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default HeadTable;
