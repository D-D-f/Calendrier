// @ts-nocheck
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const ArrowDown = ({ nameArrow, orderActive, name }) => {
  let currentColor = "";

  if (nameArrow === name) {
    if (!orderActive) {
      currentColor = "red";
    } else {
      currentColor = "white";
    }
  } else {
    currentColor = "black";
  }

  return (
    <div>
      <FontAwesomeIcon
        icon={faSortDown}
        style={{
          color: currentColor,
        }}
      />
    </div>
  );
};

export default ArrowDown;
