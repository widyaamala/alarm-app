import { useState, useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  VStack,
  Switch,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import moment from "moment";

import TimePicker from "../../components/commons/DateTimePicker/TimePicker";
import ConfirmationModal from "../../components/commons/Modal/ConfirmationModal";
import notifications from './notification.ts';
import { customAlphabet } from 'nanoid/non-secure'
const nanoid = customAlphabet('1234567890', 6)

const Index = () => {
  const { colorMode } = useColorMode()
  const [isOpenTime, setIsOpenTime] = useState(false);
  const [currentAlarmData, setCurrentAlarmData] = useState(null);
  const [currentAlarmIndex, setCurrentAlarmIndex] = useState(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [indexDataDeleted, setIndexDataDeleted] = useState(null)
  const [dataAlarm, setDataAlarm] = useState(
    JSON.parse(localStorage.getItem("alarm_data")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("alarm_data", JSON.stringify(dataAlarm));
  }, [dataAlarm]);

  const stopPropagation = (handler) => (event) => {
    event.stopPropagation();
    document.body.classList.remove('overlay-active');
    handler(event);
  };

  const handleTimeClick = (item, index) => {
    setCurrentAlarmData(item);
    setCurrentAlarmIndex(index);
    setIsOpenTime(!isOpenTime);
    document.body.classList.add('overlay-active');
  };

  const handleChangeAlarm = (value) => {
    let { id, time, label, isRepeat, repeatTime, repeatCategory } = value;
    if(!id) {
      id = nanoid();
    }
    const alarmTime = new Date();
    const [hours, minutes] = time.split(":");
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);

    if (currentAlarmIndex === null || currentAlarmIndex === undefined) {
      setDataAlarm([
        ...dataAlarm,
        { id, time: alarmTime, label, isRepeat, repeatTime, repeatCategory, isActive: true },
      ]);

      notifications.schedule(id, alarmTime, isRepeat, repeatTime, repeatCategory, label)
    } else {
      setDataAlarm(
        dataAlarm.map((item, index) => {
          if (index === currentAlarmIndex) {
            item.time = alarmTime
            item.label = label
            item.isRepeat = isRepeat
            item.repeatTime = repeatTime
            item.repeatCategory = repeatCategory
          }
          return item
        })
      );
      notifications.update(id, alarmTime, isRepeat, repeatTime, repeatCategory, label)
    }
    setIsOpenTime(false);
    document.body.classList.remove('overlay-active');
  };

  const showDeleteModal = (index) => {
    setIsShowDeleteModal(!isShowDeleteModal);
    setIndexDataDeleted(index);
    document.body.classList.remove('overlay-active');
  }

  const handleDeleteAlarm = () => {
    let listAlarm = [...dataAlarm];
    const id = listAlarm[indexDataDeleted].id;
    notifications.cancel(id);

    listAlarm.splice(indexDataDeleted, 1);
    setDataAlarm(listAlarm);
    showDeleteModal(null);
    setIsOpenTime(false);
    document.body.classList.remove('overlay-active');
  };

  const handleCancelAlarm = () => {
    setIsOpenTime(false);
    document.body.classList.remove('overlay-active');
  };

  const handleActivateAlarm = (indexAlarm) => {
    setDataAlarm((prevDataAlarm) =>
      prevDataAlarm.map((item, index) => {
        if (index === indexAlarm) {
          return { ...item, isActive: !item.isActive };
        }
        return item;
      })
    );
    
    if(dataAlarm[indexAlarm] && !dataAlarm[indexAlarm].isActive) {
      const { id, time, label, isRepeat, repeatTime, repeatCategory } = dataAlarm[indexAlarm];
      notifications.update(id, time, isRepeat, repeatTime, repeatCategory, label)
    } else {
      notifications.cancel(dataAlarm[indexAlarm].id)
    }
  };

  const getDayLabel = (item, time) => {
    if(item.isRepeat) {
      return `${item.label && item.label + ' -'} Repeat every ${item.repeatTime} ${item.repeatCategory}`
    } else {
      return item.label
    }
  };

  const getColorMode = (val) => {
    return  val === 'light' ? '0px 8px 20px -4px #e5e5e5' : 'none'
  }

  return (
    <>
      <VStack w="100%" mb="5rem" mt="3">
        {dataAlarm?.map((item, index) => (
          <Box
            key={item.id}
            w="100%"
            bg={useColorModeValue('mutedBase.light', 'mutedBase.dark')}
            pt="2"
            pb="4"
            px="4"
            my="1"
            borderRadius="12px"
            sx={{ boxShadow: getColorMode(colorMode) }}
            onClick={(e) => handleTimeClick(item, index)}
          >
            <HStack justifyContent="space-between" alignItems="center">
              <VStack alignItems="start" gap="0">
                <Text
                  fontSize="2rem"
                  textStyle="semi"
                  color={!item.isActive && 'grey'}
                >
                  {moment(item?.time)?.format("HH:mm")}
                </Text>
                <Text 
                  textStyle="xsmall"
                  color={!item.isActive && 'grey'}>
                  {getDayLabel(item, item?.time)}
                </Text>
              </VStack>
              <Switch
                id="alarm-activated"
                mt="2"
                isChecked={item.isActive}
                onChange={stopPropagation(() => handleActivateAlarm(index))}
              />
            </HStack>
          </Box>
        ))}
      </VStack>
      <HStack
        justifyContent="center"
        bottom="70px"
        position="fixed"
        zIndex="99"
      >
        <Button
          variant={useColorModeValue('primary.light', 'primary.dark')}
          rounded="full"
          w="60px"
          h="60px"
          fontSize="30px"
          onClick={() => {
            setCurrentAlarmIndex(null);
            setCurrentAlarmData(null);
            setIsOpenTime(!isOpenTime);
            document.body.classList.add('overlay-active');
          }}
        >
          +
        </Button>
      </HStack>
      {isOpenTime && (
        <TimePicker
          label={currentAlarmData?.label ?? ""}
          value={currentAlarmData ? new Date(currentAlarmData?.time) : null}
          isRepeat={currentAlarmData?.isRepeat}
          repeatTime={currentAlarmData?.repeatTime}
          repeatCategory={currentAlarmData?.repeatCategory}
          isNew={currentAlarmIndex === null}
          handleChange={handleChangeAlarm}
          toggle={handleCancelAlarm}
          handleDelete={() => showDeleteModal(currentAlarmIndex)}
        />
      )}
      <ConfirmationModal
        isOpen={isShowDeleteModal} 
        toggle={() => showDeleteModal(null)} 
        confirm={handleDeleteAlarm} 
        message="Are you sure you want to delete this alarm?"
        titleConfirm="Delete"
      />
    </>
  );
};

export default Index;
