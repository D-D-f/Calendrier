import React, { useState } from "react";
import { CalendarPicker } from "simple-calendar-react-library";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import "./Form.css";

const Form = () => {
  const [activeCalendarBirthday, setActiveCalendarBirthday] = useState(false);
  const [activeCalendarStart, setActiveCalendarStart] = useState(false);
  const [dateStarAndBirthday, setDateStartAndBirthday] = useState({
    birthday: "",
    start: "",
  });
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (d) => {
    console.log(d);
  };

  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

  const options = states.map((state) => ({
    value: state.abbreviation,
    label: state.name,
  }));

  const department = [
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Legal", label: "Legal" },
  ];

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
        <div>
          <label htmlFor="selectField">State</label>
          <Controller
            name="selectField"
            control={control}
            defaultValue={options[0]}
            render={({ field }) => (
              <Select {...field} options={options} isClearable />
            )}
          />
        </div>
        <div className="containerInput">
          <label htmlFor="zipcode">Zip Code</label>
          <input type="number" {...register("zipcode")} />
        </div>
      </fieldset>

      <div className="containerInput">
        <label htmlFor="departement">Département</label>
        <Controller
          name="departement"
          control={control}
          defaultValue={department[0]}
          render={({ field }) => (
            <Select {...field} options={department} isClearable />
          )}
        />
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
