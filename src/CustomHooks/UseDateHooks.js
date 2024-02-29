import { useState } from "react";

const UseDateHooks = () => {
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

  const [currentMonth, setCurrentMonth] = useState(
    months.indexOf(months[currentMonths])
  );
  const [currentYear, setCurrentYear] = useState(years.indexOf(currentYears));

  console.log(currentYear);

  return {
    months,
    years,
    currentMonths,
    currentYears,
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
  };
};

export default UseDateHooks;
