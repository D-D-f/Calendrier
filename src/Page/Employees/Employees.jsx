import React, { useState } from "react";
import ArrowTop from "../../Component/ArrowTop/ArrowTop";
import ArrowDown from "../../Component/ArrowDown/ArrowDown";
import "./Employees.css";
import { type } from "@testing-library/user-event/dist/type";

const Employees = () => {
  const [listDisplay, setListDisplay] = useState(10);
  const [searchUser, setSearchUser] = useState("");
  // @ts-ignore
  const allEmployees = localStorage.getItem("employees")
    ? // @ts-ignore
      JSON.parse(localStorage.getItem("employees"))
    : [];

  const filterEmployees = allEmployees.splice(0, listDisplay);

  const filterSearchUser = filterEmployees.filter((info) => {
    const searchLowerCase = searchUser.toLowerCase();
    for (let data in info) {
      const lowercaseWord =
        typeof info[data] === "string"
          ? info[data].toLowerCase()
          : info[data].value.toLowerCase();
      if (lowercaseWord.includes(searchLowerCase)) {
        return true;
      }
    }
    return false;
  });

  const displayEmployees = filterSearchUser.map((employes, index) => {
    return (
      <tr
        key={index}
        role="row"
        style={{
          backgroundColor: index % 2 === 0 ? "white" : "#d8d8d8",
        }}
      >
        <td>{employes.firstName}</td>
        <td>{employes.lastName}</td>
        <td>{employes.startdate}</td>
        <td>{employes.departement.value}</td>
        <td>{employes.dateofbirth}</td>
        <td>{employes.street}</td>
        <td>{employes.city}</td>
        <td>{employes.selectField.value}</td>
        <td>{employes.zipcode}</td>
      </tr>
    );
  });

  return (
    <>
      <h1 className="h1">Current Employees</h1>
      <div className="containerTable">
        <div className="filterTable">
          <label>
            <span>Show </span>
            <select onChange={(e) => setListDisplay(Number(e.target.value))}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span> entries</span>
          </label>

          <div>
            <label htmlFor="search">Search: </label>
            <input
              type="text"
              name="search"
              onChange={(e) => setSearchUser(e.currentTarget.value)}
            />
          </div>
        </div>
        <table className="table-employees">
          <thead className="thead">
            <tr role="row">
              <th
                className="sorting"
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                aria-label="First Name: activate to sort column ascending"
                style={{ width: "77px", position: "relative" }}
              >
                First Name
                <span className="arrowSpanTop">
                  <ArrowTop />
                </span>
                <span className="arrowSpanDown">
                  <ArrowDown />
                </span>
              </th>
              <th
                className="sorting"
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                aria-label="Last Name: activate to sort column ascending"
                style={{ width: "75px", position: "relative" }}
              >
                Last Name
                <span className="arrowSpanTop">
                  <ArrowTop />
                </span>
                <span className="arrowSpanDown">
                  <ArrowDown />
                </span>
              </th>
              <th
                className="sorting"
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                aria-label="Start Date: activate to sort column ascending"
                style={{ width: "71px", position: "relative" }}
              >
                Start Date
                <span className="arrowSpanTop">
                  <ArrowTop />
                </span>
                <span className="arrowSpanDown">
                  <ArrowDown />
                </span>
              </th>
              <th
                className="sorting"
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                aria-label="Department: activate to sort column ascending"
                style={{ width: "83px", position: "relative" }}
              >
                Department
                <span className="arrowSpanTop">
                  <ArrowTop />
                </span>
                <span className="arrowSpanDown">
                  <ArrowDown />
                </span>
              </th>
              <th
                className="sorting"
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                aria-label="Date of Birth: activate to sort column ascending"
                style={{ width: "90px", position: "relative" }}
              >
                Date of Birth
                <span className="arrowSpanTop">
                  <ArrowTop />
                </span>
                <span className="arrowSpanDown">
                  <ArrowDown />
                </span>
              </th>
              <th
                className="sorting"
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                aria-label="Street: activate to sort column ascending"
                style={{ width: "41px", position: "relative" }}
              >
                Street
                <span className="arrowSpanTop">
                  <ArrowTop />
                </span>
                <span className="arrowSpanDown">
                  <ArrowDown />
                </span>
              </th>
              <th
                className="sorting"
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                aria-label="City: activate to sort column ascending"
                style={{ width: "30px", position: "relative" }}
              >
                City
                <span className="arrowSpanTop">
                  <ArrowTop />
                </span>
                <span className="arrowSpanDown">
                  <ArrowDown />
                </span>
              </th>
              <th
                className="sorting"
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                aria-label="State: activate to sort column ascending"
                style={{ width: "35px", position: "relative" }}
              >
                State
                <span className="arrowSpanTop">
                  <ArrowTop />
                </span>
                <span className="arrowSpanDown">
                  <ArrowDown />
                </span>
              </th>
              <th
                className="sorting_asc"
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                aria-label="Zip Code: activate to sort column descending"
                style={{ width: "64px", position: "relative" }}
                aria-sort="ascending"
              >
                Zip Code
                <span className="arrowSpanTop">
                  <ArrowTop />
                </span>
                <span className="arrowSpanDown">
                  <ArrowDown />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>{displayEmployees}</tbody>
        </table>
        <div className="bottomTable">
          <p>
            Showing 1 to {displayEmployees.length} of {listDisplay} entries
          </p>

          <div className="nextList">
            <span>Previous</span>
            <button>1</button>
            <span>Next</span>
          </div>
        </div>
        <a href="/">Home</a>
      </div>
    </>
  );
};

export default Employees;
