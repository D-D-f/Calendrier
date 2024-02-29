import { useState, useEffect, useMemo } from "react";
import UseCalculDay from "./UseCalculDay";

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

  const years = useMemo(() => {
    const yearsArray = [];
    for (let i = 1950; i <= currentYears; i++) {
      yearsArray.push(i);
    }
    return yearsArray;
  }, [currentYears]);

  const [currentMonth, setCurrentMonth] = useState(
    months.indexOf(months[currentMonths])
  );
  const [currentYear, setCurrentYear] = useState(years.indexOf(currentYears));

  const [chosenDate, setChosenDate] = useState([]);
  const getFirstDayAndNumbersDays = UseCalculDay(
    currentMonth,
    years[currentYear],
    1
  );

  useEffect(() => {
    setChosenDate(() => [currentMonth, years[currentYear]]);
  }, [currentMonth, currentYear, years]);

  const currentDay = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  let [monthcurrent, yearcurrent, datecurrent] = [...chosenDate];
  let valueInput = `${datecurrent}/${monthcurrent}/${yearcurrent}`;

  const decrementTheMonth = () => {
    setCurrentMonth((curr) => {
      if (currentYear === 0 && curr === 1) {
        return curr;
      }

      if (curr === 1) {
        setCurrentYear((curr) => curr - 1);
        return (curr = 12);
      }
      return curr - 1;
    });
  };

  const incrementTheMonth = () => {
    setCurrentMonth((curr) => {
      if (currentYear === years.length - 1 && curr === 12) {
        return curr;
      }
      if (curr === 12) {
        setCurrentYear((curr) => curr + 1);
        return (curr = 1);
      }
      return curr + 1;
    });
  };

  return {
    setCurrentYear,
    setCurrentMonth,
    months,
    currentMonth,
    currentYear,
    years,
    setChosenDate,
    getFirstDayAndNumbersDays,
    incrementTheMonth,
    decrementTheMonth,
    currentDay,
    valueInput,
  };
};

export default UseDateHooks;
