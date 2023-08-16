import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';


const DatePickerExample = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const disabledDates = ["05-12-2022", "01-07-2023", "07-07-2023", "03-07-2023", "08-12-2022", "17-12-2022", "21-12-2022"];

    const options = {
      beforeShowDay: function(date) {
        const dateString = $.datepicker.formatDate('mm-dd-yy', date);
        return [disabledDates.indexOf(dateString) === -1, ""];
      },
    };

    $(inputRef.current).datepicker(options);
  }, []);

  const handleIconClick = () => {
    $(inputRef.current).datepicker('show');
  };

  return (
    <div className="date-picker-container">
     
      <div className="input-container">
        <input type="text" className="date" placeholder="mm-dd-yy" id='bookAt' ref={inputRef} />

      </div>
    </div>
  );
};

export default DatePickerExample;
