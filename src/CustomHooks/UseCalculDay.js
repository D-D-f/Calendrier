const UseCalculDay = (numMonth, year, dateOfMonth) => {
  let nbDays = 0;
  let yearBissextile = year % 4 === 0;

  switch (numMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      nbDays = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      nbDays = 30;
      break;

    default:
      nbDays = yearBissextile ? 29 : 28;
      break;
  }

  let theDate = new Date();
  theDate.setDate(dateOfMonth);
  theDate.setFullYear(year);
  theDate.setMonth(numMonth - 1);
  let firstDay = theDate.getDay().toLocaleString("fr");

  return { numberOfDaysOfTheMonth: nbDays, firstDayOfTheMonth: firstDay };
};

export default UseCalculDay;
