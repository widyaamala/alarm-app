import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import moment from "moment";
import "./datetimepicker.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DateRangePicker = ({
  value,
  handleChange,
  toggle,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempDateRange, setTempDateRange] = useState({
    startDate: value?.startDate ?? new Date(),
    endDate: value?.endDate ?? new Date(),
  });

  const onToggle = () => setIsOpen(!isOpen);

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setTempDateRange({ startDate, endDate });
  };

  const handleOk = () => {
    const { startDate, endDate } = tempDateRange;
    const dateData = {
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
    };

    if (handleChange) {
      handleChange(dateData.startDate, dateData.endDate);
    }

    setIsOpen(false);
  };

  const handleCancel = () => {
    setTempDateRange({
      startDate: value?.startDate ?? new Date(),
      endDate: value?.endDate ?? new Date(),
    });
    setIsOpen(false);
    if (toggle) toggle();
  };

  return (
    <>
      <div onClick={() => onToggle()}>
        <CalendarMonthIcon fontSize="small" />
      </div>
      {isOpen && (
        <div className="overlay-picker">
          <div className="picker">
            <DateRange
              ranges={[{
                startDate: tempDateRange.startDate,
                endDate: tempDateRange.endDate,
                key: "selection",
              }]}
              onChange={handleSelect}
              showMonthAndYearPickers={true}
              {...props}
            />
            <div className="confirm-picker">
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleOk}>OK</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DateRangePicker;
