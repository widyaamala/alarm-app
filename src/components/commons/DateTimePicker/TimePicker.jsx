import { useEffect, useState } from "react";
import DateTimePicker from "react-weblineindia-time-picker";
import "./datetimepicker.css";
import { Box, Button, HStack, Input, Select, Switch, useColorMode } from "@chakra-ui/react";

const TimePicker = ({ value, label, isRepeat, repeatTime, repeatCategory, isNew, handleChange, toggle, handleDelete }) => {
  const { colorMode } = useColorMode()
  const [tempTime, setTempTime] = useState(value ?? new Date());
  const [tempLabel, setTempLabel] = useState(label || "");
  const [tempIsRepeat, setTempIsRepeat] = useState(isNew ? true : isRepeat);
  const [tempRepeatTime, setTempRepeatTime] = useState(repeatTime || 1);
  const [tempRepeatCategory, setTempRepeatCategory] = useState(repeatCategory || "m");
  const [repeatTimeOptions, setRepeatTimeOptions] = useState([]);

  useEffect(() => {
    let maxValue;
    if (tempRepeatCategory === 'm') maxValue = 60;
    else if (tempRepeatCategory === 'h') maxValue = 24;
    else if (tempRepeatCategory === 'd') maxValue = 31;

    const options = Array.from({ length: maxValue }, (_, i) => i + 1);
    setRepeatTimeOptions(options);
  }, [tempRepeatCategory]);

  const handleSelect = (time) => {
    setTempTime(time.value);
  };

  const handleOk = () => {
    if (handleChange) {
      handleChange({
        time: tempTime,
        label: tempLabel,
        isRepeat: tempIsRepeat,
        repeatTime: tempIsRepeat ? tempRepeatTime : null,
        repeatCategory: tempIsRepeat ? tempRepeatCategory : null
      });
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
        <HStack alignItems="center" justify="space-between" mt="6">
          <Box fontWeight="bold" w="40%" textStyle="small">Label</Box>
          <Input
            w="60%"
            textAlign="right"
            placeholder="Add Label"
            variant="unstyled"
            fontSize="0.85rem"
            value={tempLabel}
            onChange={(e) => setTempLabel(e.target.value)}
          />
        </HStack>
        <HStack alignItems="center" justify="space-between" mt="2">
          <Box fontWeight="bold" textStyle="small">Repeat</Box>
          <Switch
            ml="auto"
            id="repeat-activated"
            isChecked={tempIsRepeat}
            onChange={() => setTempIsRepeat(!tempIsRepeat)}
          />
        </HStack>
        {tempIsRepeat && (
          <HStack alignItems="center" justifyContent="end" mb="6">
            <HStack w="60%">
              <Box w="50%">
                <Select
                  variant="flushed"
                  fontSize="0.85rem"
                  value={tempRepeatTime}
                  onChange={(e) => setTempRepeatTime(Number(e.target.value))}
                >
                  {repeatTimeOptions?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Box>
              <Select
                variant="flushed"
                fontSize="0.85rem"
                onChange={(event) => setTempRepeatCategory(event.target.value)}
                value={tempRepeatCategory}
              >
                <option value='m'>Minute</option>
                <option value='h'>Hour</option>
                <option value='d'>Day</option>
              </Select>
            </HStack>
          </HStack>
        )}
        <HStack mt="8">
          {!isNew && (
            <Button
              textStyle="semi"
              fontSize="14px"
              border="1px"
              borderColor="danger"
              color="danger"
              bg="white"
              h="8"
              w="80px"
              onClick={handleDelete}
            >
              Delete
            </Button>
          )}
          <HStack marginLeft="auto">
            <Button
              onClick={handleCancel}
              h="8"
              w="90px"
              textStyle="light"
              fontSize="14px"
              bg={colorMode === 'dark' ? 'gray' : 'gray.100'}
            >
              Cancel
            </Button>
            <Button
              onClick={handleOk}
              h="8"
              w="70px"
              textStyle="light"
              fontSize="14px"
              variant="primary"
            >
              OK
            </Button>
          </HStack>
        </HStack>
      </div>
    </div>
  );
};

export default TimePicker;
