import React, { useState } from "react";
import { CalendarPicker } from "simple-calendar-react-library";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  const [activeCalendarBirthday, setActiveCalendarBirthday] = useState(false);
  const [activeCalendarStart, setActiveCalendarStart] = useState(false);
  const [dateStarAndBirthday, setDateStartAndBirthday] = useState({
    birthday: "",
    start: "",
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => {
    console.log(d);
  };

  const getDateBirthday = (date) => {
    setDateStartAndBirthday((prev) => ({
      ...prev,
      birthday: date,
    }));
  };

  const getDateStart = (date) => {
    setDateStartAndBirthday((prev) => ({
      ...prev,
      start: date,
    }));
  };

  const displayCalendarBirthday = () => {
    setActiveCalendarBirthday(!activeCalendarBirthday);
  };

  const displayCalendarStart = () => {
    setActiveCalendarStart(!activeCalendarStart);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="containerInput">
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...register("firstName")} />
      </div>
      <div className="containerInput">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...register("lastName")} />
      </div>
      <div className="containerInput">
        <label htmlFor="dateofbirth">Date Of Birth</label>
        <input
          type="text"
          {...register("dateofbirth")}
          value={dateStarAndBirthday.birthday}
          onClick={displayCalendarBirthday}
          readOnly
        />
        <div className="calendar">
          {activeCalendarBirthday && (
            <CalendarPicker getDate={getDateBirthday} langage="fr" />
          )}
        </div>
      </div>
      <div className="containerInput">
        <label htmlFor="startdate">Start Date</label>
        <input
          type="text"
          {...register("startdate")}
          value={dateStarAndBirthday.start}
          onClick={displayCalendarStart}
          readOnly
        />
        <div className="calendar">
          {activeCalendarStart && (
            <CalendarPicker getDate={getDateStart} langage="fr" />
          )}
        </div>
      </div>
      <fieldset>
        <legend>Address</legend>
        <div className="containerInput">
          <label htmlFor="street">Street</label>
          <input type="text" {...register("street")} />
        </div>
        <div className="containerInput">
          <label htmlFor="city">City</label>
          <input type="text" {...register("city")} />
        </div>
      </fieldset>

      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
