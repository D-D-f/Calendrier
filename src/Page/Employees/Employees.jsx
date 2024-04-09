import React, { useState } from "react";
import ArrowTop from "../../Component/ArrowTop/ArrowTop";
import ArrowDown from "../../Component/ArrowDown/ArrowDown";
import "./Employees.css";

const Employees = () => {
  const [listDisplay, setListDisplay] = useState(10);
  const [searchUser, setSearchUser] = useState("");
  const [orderKey, setOrderKey] = useState({ key: "firstName", order: true });
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

  const orderAlphabetic = (data, key) => {
    if (key === "departement" || key === "selectField") {
      if (orderKey.order) {
        return data.sort((a, b) => {
          const firstNameA = a[key].value.toUpperCase();
          const firstNameB = b[key].value.toUpperCase();

          if (firstNameA < firstNameB) {
            return -1;
          }
          if (firstNameA > firstNameB) {
            return 1;
          }
          return 0;
        });
      } else {
        return data.sort((a, b) => {
          const firstNameA = a[key].value.toUpperCase();
          const firstNameB = b[key].value.toUpperCase();

          if (firstNameA > firstNameB) {
            return -1;
          }
          if (firstNameA < firstNameB) {
            return 1;
          }
          return 0;
        });
      }
    } else {
      if (orderKey.order) {
        return data.sort((a, b) => {
          const firstNameA = a[key].toUpperCase();
          const firstNameB = b[key].toUpperCase();

          if (firstNameA < firstNameB) {
            return -1;
          }
          if (firstNameA > firstNameB) {
            return 1;
          }
          return 0;
        });
      } else {
        return data.sort((a, b) => {
          const firstNameA = a[key].toUpperCase();
          const firstNameB = b[key].toUpperCase();

          if (firstNameA > firstNameB) {
            return -1;
          }
          if (firstNameA < firstNameB) {
            return 1;
          }
          return 0;
        });
      }
    }
  };

  orderAlphabetic(filterSearchUser, orderKey.key);

  const displayEmployees = filterSearchUser.map((employes, index) => {
    return (
      <tr
        className="testtr"
        key={index}
        role="row"
        style={{
          backgroundColor: index % 2 === 0 ? "white" : "#ddd",
        }}
      >
        <td className={` ${orderKey.key === "firstName" && "firstName"}`}>
          {employes.firstName}
        </td>
        <td className={` ${orderKey.key === "lastName" && "lastName"}`}>
          {employes.lastName}
        </td>
        <td className={` ${orderKey.key === "startdate" && "startdate"}`}>
          {employes.startdate}
        </td>
        <td className={` ${orderKey.key === "departement" && "departement"}`}>
          {employes.departement.value}
        </td>
        <td className={` ${orderKey.key === "dateofbirth" && "dateofbirth"}`}>
          {employes.dateofbirth}
        </td>
        <td className={` ${orderKey.key === "street" && "street"}`}>
          {employes.street}
        </td>
        <td className={` ${orderKey.key === "city" && "city"}`}>
          {employes.city}
        </td>
        <td className={` ${orderKey.key === "selectField" && "selectField"}`}>
          {employes.selectField.value}
        </td>
        <td className={` ${orderKey.key === "zipcode" && "zipcode"}`}>
          {employes.zipcode}
        </td>
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
                className={`sorting`}
                aria-controls="employee-table"
                rowSpan={1}
                colSpan={1}
                aria-label="First Name: activate to sort column ascending"
                style={{
                  width: "77px",
                  position: "relative",
                }}
                onClick={() =>
                  setOrderKey({ key: "firstName", order: !orderKey.order })
                }
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
                onClick={() =>
                  setOrderKey({ key: "lastName", order: !orderKey.order })
                }
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
                onClick={() =>
                  setOrderKey({ key: "startdate", order: !orderKey.order })
                }
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
                onClick={() =>
                  setOrderKey({
                    key: "departement",
                    order: !orderKey.order,
                  })
                }
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
                onClick={() =>
                  setOrderKey({ key: "dateofbirth", order: !orderKey.order })
                }
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
                onClick={() =>
                  setOrderKey({ key: "street", order: !orderKey.order })
                }
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
                onClick={() =>
                  setOrderKey({ key: "city", order: !orderKey.order })
                }
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
                onClick={() =>
                  setOrderKey({
                    key: "selectField",
                    order: !orderKey.order,
                  })
                }
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
                onClick={() =>
                  setOrderKey({ key: "zipcode", order: !orderKey.order })
                }
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
