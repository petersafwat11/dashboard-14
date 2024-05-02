import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

// import DatePicker  from "react-datepicker";
import classes from "./dateAndTimePicker.module.css";

const DatePickerr = ({ data, dispatchDetail, type, dateAndTime }) => {
  return (
    <div className={classes["date-wrapper"]}>
      {dateAndTime ? (
        <DatePicker
          onChange={(date) =>
            dispatchDetail({ type: type, value: { ...data, date: date } })
          }
          value={data?.date}
        />
      ) : (
        <DatePicker
          onChange={(date) => dispatchDetail({ type: type, value: date })}
          value={data}
        />
      )}
    </div>
  );
};

export default DatePickerr;
