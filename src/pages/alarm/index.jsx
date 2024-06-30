import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  VStack,
  Switch,
  Text,
  IconButton,
  Input,
  Collapse,
} from "@chakra-ui/react";
import moment from "moment";
import AddIcon from "@mui/icons-material/Add";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import SnoozeIcon from "@mui/icons-material/Snooze";
import { Howl } from "howler";

import DateRangePicker from "../../components/commons/DateTimePicker/DateRangePicker";
import TimePicker from "../../components/commons/DateTimePicker/TimePicker";
import { days } from "../../utils/Constants";

const Index = () => {
  const [collapsedIndex, setCollapsedIndex] = useState(null);
  const [isOpenTime, setIsOpenTime] = useState(false);
  const [currentAlarmTime, setCurrentAlarmTime] = useState(null);
  const [currentAlarmIndex, setCurrentAlarmIndex] = useState(null);
  const [dataAlarm, setDataAlarm] = useState(
    JSON.parse(localStorage.getItem("alarm_data")) ?? []
  );

  const alarmSound = new Howl({
    src: ["../../assets/alarm.mp3"],
  });

  useEffect(() => {
    localStorage.setItem("alarm_data", JSON.stringify(dataAlarm));
  }, [dataAlarm]);

  const handleCollapseAlarm = (indexAlarm) => {
    if (collapsedIndex === indexAlarm) setCollapsedIndex(null);
    else setCollapsedIndex(indexAlarm);
  };

  const handleClickDay = (day, index) => {
    setDataAlarm((prevData) =>
      prevData.map((alarm, i) =>
        i === index
          ? {
              ...alarm,
              selectedDays: alarm.selectedDays.includes(day.value)
                ? alarm.selectedDays.filter((d) => d !== day.value)
                : [...alarm.selectedDays, day.value],
            }
          : alarm
      )
    );
  };

  const handleTimeClick = (time, index) => {
    setCurrentAlarmTime(time);
    setCurrentAlarmIndex(index);
    setIsOpenTime(!isOpenTime);
  };

  const handleChangeAlarm = (time) => {
    if (currentAlarmIndex === null || currentAlarmIndex === undefined) {
      setDataAlarm([
        ...dataAlarm,
        { time: time, selectedDays: [], schedules: [], isActive: true },
      ]);
    } else {
      setDataAlarm(
        dataAlarm.map((item, index) => {
          if (index === currentAlarmIndex) item.time = time;
          return item;
        })
      );
    }
    setIsOpenTime(false);
  };

  const handleDeleteAlarm = (indexAlarm) => {
    let listAlarm = [...dataAlarm];
    listAlarm.splice(indexAlarm, 1);
    setDataAlarm(listAlarm);
  };

  const handleCancelAlarm = () => {
    setIsOpenTime(false);
  };

  const handleAddSchedules = (schedules, indexAlarm) => {
    const startDate = new Date(schedules.start_date);
    const endDate = new Date(schedules.end_date);
    const daysOfWeek = [];

    for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
      daysOfWeek.push(days.find((d) => d.id === day.getDay()).value);
    }

    setDataAlarm(
      dataAlarm.map((item, index) => {
        if (index === indexAlarm) {
          item.schedules = schedules;
          item.selectedDays = [
            ...new Set([...item.selectedDays, ...daysOfWeek]),
          ];
        }
        return item;
      })
    );
  };

  const handleActivateAlarm = (indexAlarm) => {
    setDataAlarm(
      dataAlarm.map((item, index) => {
        if (index === indexAlarm) item.isActive = !item.isActive;
        return item;
      })
    );
  };

  const handleActivateSnooze = (indexAlarm) => {
    setDataAlarm(
      dataAlarm.map((item, index) => {
        if (index === indexAlarm) item.isSnoozed = !item.isSnoozed;
        return item;
      })
    );
  };

  const getDayLabel = (time, selectedDays) => {
    const currentDate = new Date();
    const alarmTime = new Date();
    const [hours, minutes] = moment(time).format("HH:mm")?.split(":");
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);

    if (!selectedDays?.length) {
      return alarmTime > currentDate ? "Today" : "Tomorrow";
    } else if (selectedDays?.length === 7) {
      return "Everyday";
    } else {
      return selectedDays?.join(", ");
    }
  };

  const isWithinSchedule = (currentDate, schedules) => {
    if (!schedules || !schedules.start_date || !schedules.end_date) return false;
    const startDate = new Date(schedules.start_date);
    const endDate = new Date(schedules.end_date);
    return currentDate >= startDate && currentDate <= endDate;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      dataAlarm.forEach((alarm) => {
        if (alarm.isActive) {
          const alarmTime = new Date();
          const [hours, minutes] = alarm.isSnoozed
            ? moment(alarm.time).add(alarm.snooze, "minutes").format("HH:mm")?.split(":")
            : moment(alarm.time).format("HH:mm")?.split(":");
          alarmTime.setHours(hours);
          alarmTime.setMinutes(minutes);

          const isTodayOrTomorrow =
            !alarm.selectedDays.length &&
            (alarmTime > now || alarmTime.getDate() === now.getDate() + 1);

          const isScheduled = isWithinSchedule(now, alarm.schedules);

          if (
            (isTodayOrTomorrow || alarm.selectedDays.includes(days[now.getDay()].value) || isScheduled) &&
            now.getHours() === alarmTime.getHours() &&
            now.getMinutes() === alarmTime.getMinutes()
          ) {
            alarmSound.play();
            alert(`Alarm for ${alarm.time} is ringing!`);

            if (alarm.isSnoozed) {
              setDataAlarm(
                dataAlarm.map((item) => {
                  if (item === alarm) item.isSnoozed = false;
                  return item;
                })
              );
            }
          }
        }
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [dataAlarm]);

  return (
    <>
      <VStack w="100%" mb="4.5rem">
        {dataAlarm?.map((item, index) => (
          <Box
            w="100%"
            bg="#fff"
            pt="2"
            pb="4"
            px="4"
            borderRadius="20px"
            key={index}
          >
            <HStack justifyContent="space-between">
              <Text
                fontSize="2.5rem"
                textStyle="semi"
                onClick={() => handleTimeClick(item.time, index)}
              >
                {moment(item?.time)?.format("HH:mm")}
              </Text>
              <Button
                onClick={() => handleCollapseAlarm(index)}
                as={IconButton}
                icon={
                  <ExpandCircleDownIcon
                    fontSize="small"
                    sx={{
                      transform:
                        collapsedIndex === index
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                }
                variant="unstyled"
                w="auto"
                h="24px"
                color="#252526"
                mr="-10px"
                _focus={{ background: "none" }}
              />
            </HStack>
            <HStack justify="space-between" alignItems="center">
              <Text textStyle="xsmall">
                {getDayLabel(item?.time, item?.selectedDays)}
              </Text>
              <Switch
                id="alarm-activated"
                mt="2"
                isChecked={item.isActive}
                onChange={() => handleActivateAlarm(index)}
              />
            </HStack>
            <Collapse in={collapsedIndex === index} animateOpacity>
              <HStack justify="space-between" alignItems="center" my="4">
                <HStack spacing={2}>
                  {days.map((day) => (
                    <Button
                      key={day.value}
                      variant={
                        item?.selectedDays?.includes(day.value)
                          ? "solid"
                          : "outline"
                      }
                      colorScheme="blackAlpha"
                      rounded="full"
                      w="30px"
                      minW="30px"
                      h="30px"
                      p="2"
                      fontSize="14px"
                      onClick={() => handleClickDay(day, index)}
                    >
                      {day.label}
                    </Button>
                  ))}
                </HStack>
                <DateRangePicker
                  value={{
                    startDate: item?.schedules?.start_date
                      ? new Date(item?.schedules?.start_date)
                      : new Date(),
                    endDate: item?.schedules?.end_date
                      ? new Date(item?.schedules?.end_date)
                      : new Date(),
                  }}
                  handleChange={(start, end) =>
                    handleAddSchedules(
                      { start_date: start, end_date: end },
                      index
                    )
                  }
                />
              </HStack>
              <HStack alignItems="center" my="3">
                <LabelIcon fontSize="small" />
                <Input
                  placeholder="Add Label"
                  variant="unstyled"
                  fontSize="0.85rem"
                  value={item?.label}
                  onChange={(e) => {
                    setDataAlarm(
                      dataAlarm.map((alarm, i) => {
                        if (i === index) alarm.label = e?.target?.value;
                        return alarm;
                      })
                    );
                  }}
                />
              </HStack>
              <HStack alignItems="start" my="3">
                <SnoozeIcon fontSize="small" />
                {item.isSnoozed ? (
                  <VStack align="start" gap="0">
                    <Input
                      placeholder="Snooze"
                      type="number"
                      min="0"
                      variant="unstyled"
                      fontSize="0.85rem"
                      value={item?.snooze}
                      onChange={(e) => {
                        setDataAlarm(
                          dataAlarm.map((alarm, i) => {
                            if (i === index) alarm.snooze = e?.target?.value;
                            return alarm;
                          })
                        );
                      }}
                    />
                    <Text fontSize="0.6rem">Minutes</Text>
                  </VStack>
                ) : (
                  <Text fontSize="0.85rem">Snooze</Text>
                )}
                <Switch
                  id="snooze"
                  ml="auto"
                  size="sm"
                  isChecked={item.isSnoozed}
                  onChange={() => handleActivateSnooze(index)}
                />
              </HStack>
              <HStack
                alignItems="center"
                my="3"
                onClick={() => handleDeleteAlarm(index)}
              >
                <DeleteIcon fontSize="small" />
                <Text fontSize="0.85rem">Delete</Text>
              </HStack>
            </Collapse>
          </Box>
        ))}
      </VStack>
      <HStack
        justifyContent="center"
        bottom="50px"
        position="fixed"
        zIndex="99"
      >
        <Button
          variant="solid"
          rounded="full"
          background="#252526"
          w="60px"
          h="60px"
          _focus={{ background: "#252526" }}
          onClick={() => {
            setCurrentAlarmIndex(null);
            setCurrentAlarmTime(null);
            setIsOpenTime(!isOpenTime);
          }}
        >
          <Flex m="auto" color="white">
            <AddIcon />
          </Flex>
        </Button>
      </HStack>
      {isOpenTime && (
        <TimePicker
          value={currentAlarmTime ? new Date(currentAlarmTime) : null}
          handleChange={handleChangeAlarm}
          toggle={handleCancelAlarm}
        />
      )}
    </>
  );
};

export default Index;
