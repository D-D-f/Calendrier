import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form>
      <p className="containerInput">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" />
      </p>
      <p className="containerInput">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />
      </p>
      <p className="containerInput">
        <label htmlFor="dateofbirth">Date Of Birth</label>
        <input type="text" name="dateofbirth" />
      </p>
      <p className="containerInput">
        <label htmlFor="startdate">Start Date</label>
        <input type="text" name="startdate" />
      </p>
    </form>
  );
};

export default Form;
