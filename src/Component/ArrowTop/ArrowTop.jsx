// @ts-nocheck
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

const ArrowTop = ({ nameArrow, orderActive, name }) => {
  let currentColor = "";

  if (nameArrow === name) {
    if (orderActive) {
      currentColor = "red";
    } else {
      currentColor = "white";
    }
  } else {
    currentColor = "black";
  }
  return (
    <div>
      <FontAwesomeIcon icon={faSortUp} style={{ color: currentColor }} />
    </div>
  );
};

export default ArrowTop;
