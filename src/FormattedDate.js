import React from "react";

export default function FormattedDate(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;

  return (
    <div className="formatted-date">
      {day}, {date} {month} | {hours}:{minutes}
    </div>
  );
}
