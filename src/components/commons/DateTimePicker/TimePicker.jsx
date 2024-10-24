import { useEffect, useState } from "react";
import { Box, Button, HStack, Input, Select, Switch, useColorMode } from "@chakra-ui/react";
import "./datetimepicker.css";
import moment from 'moment'

const TimePicker = ({ value, label, isRepeat, repeatTime, repeatCategory, isNew, handleChange, toggle, handleDelete }) => {
  const defaultTime = (val) => moment(val ?? new Date()).format('HH:mm');
  const { colorMode } = useColorMode()
  const [tempTime, setTempTime] = useState(defaultTime(value));
  const [tempLabel, setTempLabel] = useState(label || "");
  const [tempIsRepeat, setTempIsRepeat] = useState(isNew ? false : isRepeat);
  const [tempRepeatTime, setTempRepeatTime] = useState(repeatTime || 1);
  const [tempRepeatCategory, setTempRepeatCategory] = useState(repeatCategory || "h");
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
    setTempTime(time.target.value);
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
    setTempTime(value ?? defaultTime);
    if (toggle) toggle();
  };

  return (
    <div className="overlay-picker">
      <div className="picker">
        <Input
          value={tempTime}
          disabled={tempIsRepeat}
          onChange={handleSelect}
          type="time"
          fontSize="3rem"
          height="100px"
          textAlign="center"
        />
        <HStack alignItems="center" justify="space-between" mt="6">
          <Box fontWeight="bold" w="40%">Label</Box>
          <Input
            w="60%"
            textAlign="right"
            placeholder="Add Label"
            variant="unstyled"
            value={tempLabel}
            onChange={(e) => setTempLabel(e.target.value)}
          />
        </HStack>
        <HStack alignItems="center" justify="space-between" mt="2" mb="2">
          <Box fontWeight="bold">Repeat</Box>
          <Switch
            ml="auto"
            id="repeat-activated"
            isChecked={tempIsRepeat}
            onChange={() => setTempIsRepeat(!tempIsRepeat)}
          />
        </HStack>
        {tempIsRepeat && (
          <HStack alignItems="center" justifyContent="end" mb="6">
            <HStack w="70%">
              <Box w="70%">
                <Select
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
                textAlign="right"
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
