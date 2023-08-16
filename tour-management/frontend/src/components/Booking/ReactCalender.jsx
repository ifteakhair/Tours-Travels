import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const isDateDisabled = (date) => {
    const disabledDates = [
      new Date("2022-12-05"),
      new Date("2023-07-01"),
      new Date("2023-07-07"),
      new Date("2023-07-03"),
      new Date("2022-12-08"),
      new Date("2022-12-17"),
      new Date("2022-12-21")
    ];

    // Check if the date is in the disabledDates array
    return disabledDates.some(disabledDate => {
      // Compare the year, month, and day components of the dates
      return (
        date.getFullYear() === disabledDate.getFullYear() &&
        date.getMonth() === disabledDate.getMonth() &&
        date.getDate() === disabledDate.getDate()
      );
    });
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} tileDisabled={({ date }) => isDateDisabled(date)} />
    </div>
  );
};

export default ReactCalendar;
