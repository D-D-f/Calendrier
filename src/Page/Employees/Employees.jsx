import React, { useState } from "react";
import "./Employees.css";

const Employees = () => {
  const [listDisplay, setListDisplay] = useState(10);
  // @ts-ignore
  const allEmployees = localStorage.getItem("employees")
    ? // @ts-ignore
      JSON.parse(localStorage.getItem("employees"))
    : [];

  console.log(allEmployees);
  const filterEmployees = allEmployees.splice(0, listDisplay);
  const displayEmployees = filterEmployees.map((employes, index) => {
    return (
      <tr key={index} role="row">
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
      <div>
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
      </div>
      <table>
        <thead className="thead">
          <tr role="row">
            <th
              className="sorting"
              aria-controls="employee-table"
              rowSpan={1}
              colSpan={1}
              aria-label="First Name: activate to sort column ascending"
              style={{ width: "77px" }}
            >
              First Name
            </th>
            <th
              className="sorting"
              aria-controls="employee-table"
              rowSpan={1}
              colSpan={1}
              aria-label="Last Name: activate to sort column ascending"
              style={{ width: "75px" }}
            >
              Last Name
            </th>
            <th
              className="sorting"
              aria-controls="employee-table"
              rowSpan={1}
              colSpan={1}
              aria-label="Start Date: activate to sort column ascending"
              style={{ width: "71px" }}
            >
              Start Date
            </th>
            <th
              className="sorting"
              aria-controls="employee-table"
              rowSpan={1}
              colSpan={1}
              aria-label="Department: activate to sort column ascending"
              style={{ width: "83px" }}
            >
              Department
            </th>
            <th
              className="sorting"
              aria-controls="employee-table"
              rowSpan={1}
              colSpan={1}
              aria-label="Date of Birth: activate to sort column ascending"
              style={{ width: "90px" }}
            >
              Date of Birth
            </th>
            <th
              className="sorting"
              aria-controls="employee-table"
              rowSpan={1}
              colSpan={1}
              aria-label="Street: activate to sort column ascending"
              style={{ width: "41px" }}
            >
              Street
            </th>
            <th
              className="sorting"
              aria-controls="employee-table"
              rowSpan={1}
              colSpan={1}
              aria-label="City: activate to sort column ascending"
              style={{ width: "30px" }}
            >
              City
            </th>
            <th
              className="sorting"
              aria-controls="employee-table"
              rowSpan={1}
              colSpan={1}
              aria-label="State: activate to sort column ascending"
              style={{ width: "35px" }}
            >
              State
            </th>
            <th
              className="sorting_asc"
              aria-controls="employee-table"
              rowSpan={1}
              colSpan={1}
              aria-label="Zip Code: activate to sort column descending"
              style={{ width: "64px" }}
              aria-sort="ascending"
            >
              Zip Code
            </th>
          </tr>
        </thead>
        <tbody>{displayEmployees}</tbody>
      </table>
      <div>
        <p>
          Showing 1 to {displayEmployees.length} of {listDisplay} entries
        </p>
      </div>
      <a href="/">Home</a>
    </>
  );
};

export default Employees;
