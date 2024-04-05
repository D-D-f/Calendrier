import React from "react";
import "./Employees.css";

const Employees = () => {
  const allEmployees = JSON.parse(localStorage.getItem("employees"));
  const displayEmployees = allEmployees.map((employes, index) => {
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
      <a href="/">Home</a>
    </>
  );
};

export default Employees;
