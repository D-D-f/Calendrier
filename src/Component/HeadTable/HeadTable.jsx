import React from "react";
import "./HeadTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const HeadTable = () => {
  return (
    <div className="HeadTable">
      <FontAwesomeIcon icon={faCaretLeft} size="xs" />
      <FontAwesomeIcon icon={faCaretRight} size="xs" />
    </div>
  );
};

export default HeadTable;
