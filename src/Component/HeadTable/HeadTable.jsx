import React from "react";
import "./HeadTable.css";
import List from "../../Component/List/List.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const HeadTable = () => {
  return (
    <div className="HeadTable">
      <FontAwesomeIcon icon={faCaretLeft} size="xs" />
      <List typeDate="month" list={[]} />
      <List typeDate="year" list={[]} />
      <FontAwesomeIcon icon={faCaretRight} size="xs" />
    </div>
  );
};

export default HeadTable;
