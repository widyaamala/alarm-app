import { useState } from "react";
import DateTimePicker from "react-weblineindia-time-picker";
import "./datetimepicker.css";
import { Button, HStack } from "@chakra-ui/react";

const TimePicker = ({ value, handleChange, toggle }) => {
  const [tempTime, setTempTime] = useState(value ?? new Date());

  const handleSelect = (time) => {
    setTempTime(time.value);
  };

  const handleOk = () => {
    if (handleChange) {
      handleChange(tempTime);
    }
  };

  const handleCancel = () => {
    setTempTime(value ?? new Date());
    if (toggle) toggle();
  };

  return (
    <div className="overlay-picker">
      <div className="picker">
        <DateTimePicker
          hourFormat="12"
          value={tempTime}
          onChange={handleSelect}
          timeOnly
        />
        <HStack justifyContent="end" mt="5">
          <Button
            onClick={handleCancel}
            h="8"
            textStyle="light"
            fontSize="14px"
            _focus={{ bg: "white" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleOk}
            h="8"
            textStyle="light"
            fontSize="14px"
            variant="primary"
          >
            OK
          </Button>
        </HStack>
      </div>
    </div>
  );
};

export default TimePicker;
