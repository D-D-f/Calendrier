import React from "react";

const List = ({ bool, list }) => {
  const styleList = {
    display: bool ? "block" : "none",
  };

  return (
    <div style={{ ...styleList }}>
      <ul>
        <li>qsdsqd</li>
      </ul>
    </div>
  );
};

export default List;
