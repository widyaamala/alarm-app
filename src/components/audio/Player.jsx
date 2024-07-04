import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import {
  PlayCircleIcon,
  PauseCircleIcon,
  RepeatIcon,
  RepeatOneIcon,
  RepeatOnIcon,
  SkipNextIcon,
  SkipPreviousIcon,
  VolumeUpIcon,
  VolumeOffIcon,
} from "../../assets/icons";
import { formatTime } from "../../utils/Helper";

const Player = ({
  trackDetail,
  currentTime,
  selectedMusic,
  toggleMute,
  isMuted,
  togglePrev,
  togglePlay,
  isPlaying,
  toggleNext,
  toggleRepeat,
  repeatMode,
  handleSeekChange
}) => {
  return (
    <VStack
      bottom="50px"
      position="fixed"
      zIndex="9"
      width="100%"
      bg="white"
      pt="5"
      pb="6"
      px="5"
      gap="0"
      mr="-5px"
      borderTopRadius="30px"
    >
      <Text fontSize="14px">
        {trackDetail?.title
          ? `${trackDetail.title} - ${trackDetail.artist}`
          : "Music Name"}
      </Text>
      <VStack
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack w="100%" gap="0" px="2">
          <Slider
            value={currentTime}
            min={0}
            max={selectedMusic ? selectedMusic?.duration() : 0}
            onChange={handleSeekChange}
            mx="2"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text fontSize="14px">{formatTime(currentTime)}</Text>
        </HStack>
        <HStack w="100%" justifyContent="space-between" pl="4" pr="1">
          <Image
            alt="icon volume"
            src={isMuted ? VolumeOffIcon : VolumeUpIcon}
            onClick={toggleMute}
            mr="auto"
            w="1em"
            h="1em"
          />
          <HStack mx="auto" gap="4">
            <Image
              alt="icon previous"
              src={SkipPreviousIcon}
              onClick={togglePrev}
              w="0.85em"
              h="0.85em"
            />
            <Image
              alt="icon play"
              src={isPlaying ? PauseCircleIcon : PlayCircleIcon}
              onClick={togglePlay}
              w="2em"
              h="2em"
            />
            <Image
              alt="icon next"
              src={SkipNextIcon}
              onClick={toggleNext}
              w="0.85em"
              h="0.85em"
            />
          </HStack>
          <Image
            alt="icon repeat"
            src={repeatMode === "off"
              ? RepeatIcon
              : repeatMode === "one"
                ? RepeatOneIcon
                : RepeatOnIcon
            }
            onClick={toggleRepeat}
            ml="auto"
            w="1em"
            h="1em"
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Player;
