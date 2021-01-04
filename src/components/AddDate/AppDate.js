import React from "react";
import "./AppDate.scss";

let date = new Date().getDate(); //Current Date
let month = new Date().getMonth() + 1; //Current Month
let year = new Date().getFullYear(); //Current Year
// let hours = new Date().getHours(); //Current Hours
// let min = new Date().getMinutes(); //Current Minutes
// let sec = new Date().getSeconds(); //Current Seconds
const today = date + "." + month + "." + year;

const AppDate = (props) => {
  // console.log("####:props",props)
  return (
    <div className="date_wrap">
      <p> {today} </p>{" "}
    </div>
  );
};
export default AppDate;
