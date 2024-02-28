import React, { useState, createContext } from "react";

export const ActiveContext = createContext();

const DateContextProvider = () => {
  const currentDate = new Date();
  const currentYears = currentDate.getFullYear();
  const currentMonths = currentDate.getMonth() + 1;

  const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [];
  for (let i = 1950; i <= currentYears; i++) {
    years.push(i);
  }
};

export default DateContextProvider;
