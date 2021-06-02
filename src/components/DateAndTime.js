import React from "react";

var DateAndTime = () => {
  var showDate = new Date();
  var displayTodaysDate =
    showDate.getDate() +
    "/" +
    showDate.getMonth() +
    "/" +
    showDate.getFullYear();

  var dt = showDate.toDateString();
  var displayTime =
    showDate.getHours() +
    ":" +
    showDate.getMinutes() +
    ":" +
    showDate.getSeconds();

  function set() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }

  return (
    <div className="DT__format">
      <h1 className="DT__text">{dt} </h1>
      
    </div>
  );
};

export default DateAndTime;
