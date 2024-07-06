import { useColorMode } from "@chakra-ui/react";

import AlarmIcon from "./Alarm.svg";
import AlarmActiveIcon from "./AlarmActive.svg";
import AlarmActiveDarkModeIcon from "./AlarmActiveDarkMode.svg";
import ArrowBackIcon from "./ArrowBack.svg";
import BadgeIcon from "./Badge.svg";
import CalendarMonthIcon from "./CalendarMonth.svg";
import ContactPhoneIcon from "./ContactPhone.svg";
import DeleteIcon from "./Delete.svg";
import DeleteDarkModeIcon from "./DeleteDarkMode.svg";
import EmailIcon from "./Email.svg";
import ErrorIcon from "./Error.svg";
import ErrorDarkModeIcon from "./ErrorDarkMode.svg";
import LabelIcon from "./Label.svg";
import LabelDarkModeIcon from "./LabelDarkMode.svg";
import LibraryMusicIcon from "./LibraryMusic.svg";
import LibraryMusicActiveIcon from "./LibraryMusicActive.svg";
import LibraryMusicActiveDarkModeIcon from "./LibraryMusicActiveDarkMode.svg";
import MoreVertIcon from "./MoreVert.svg";
import MoreVertDarkModeIcon from "./MoreVertDarkMode.svg";
import NewspaperIcon from "./Newspaper.svg";
import NewspaperActiveIcon from "./NewspaperActive.svg";
import NewspaperActiveDarkModeIcon from "./NewspaperActiveDarkMode.svg";
import PauseCircleIcon from "./PauseCircle.svg";
import PauseCircleDarkModeIcon from "./PauseCircleDarkMode.svg";
import PlayCircleIcon from "./PlayCircle.svg";
import PlayCircleDarkModeIcon from "./PlayCircleDarkMode.svg";
import RepeatIcon from "./Repeat.svg";
import RepeatDarkModeIcon from "./RepeatDarkMode.svg";
import RepeatOneIcon from "./RepeatOne.svg";
import RepeatOneDarkModeIcon from "./RepeatOneDarkMode.svg";
import RepeatOnIcon from "./RepeatOn.svg";
import RepeatOnDarkModeIcon from "./RepeatOnDarkMode.svg";
import SkipNextIcon from "./SkipNext.svg";
import SkipNextDarkModeIcon from "./SkipNextDarkMode.svg";
import SkipPreviousIcon from "./SkipPrevious.svg";
import SkipPreviousDarkModeIcon from "./SkipPreviousDarkMode.svg";
import Visibility from "./Visibility.svg";
import VisibilityOff from "./VisibilityOff.svg";
import VolumeUpIcon from "./VolumeUp.svg";
import VolumeUpDarkModeIcon from "./VolumeUpDarkMode.svg";
import VolumeOffIcon from "./VolumeOff.svg";
import VolumeOffDarkModeIcon from "./VolumeOffDarkMode.svg";

const useIcons = () => {
  const { colorMode } = useColorMode();

  const icons = {
    alarm: AlarmIcon,
    alarmActive: colorMode === "dark" ? AlarmActiveDarkModeIcon : AlarmActiveIcon,
    arrowBack: ArrowBackIcon,
    badge: BadgeIcon,
    calendarMonth: CalendarMonthIcon,
    contactPhone: ContactPhoneIcon,
    delete: colorMode === "dark" ? DeleteDarkModeIcon : DeleteIcon,
    email: EmailIcon,
    error: colorMode === "dark" ? ErrorDarkModeIcon : ErrorIcon,
    label: colorMode === "dark" ? LabelDarkModeIcon : LabelIcon,
    libraryMusic: LibraryMusicIcon,
    libraryMusicActive: colorMode === "dark" ? LibraryMusicActiveDarkModeIcon : LibraryMusicActiveIcon,
    moreVert: colorMode === "dark" ? MoreVertDarkModeIcon : MoreVertIcon,
    newspaper: NewspaperIcon,
    newspaperActive: colorMode === "dark" ? NewspaperActiveDarkModeIcon : NewspaperActiveIcon,
    pauseCircle: colorMode === "dark" ? PauseCircleDarkModeIcon : PauseCircleIcon,
    playCircle: colorMode === "dark" ? PlayCircleDarkModeIcon : PlayCircleIcon,
    repeat: colorMode === "dark" ? RepeatDarkModeIcon : RepeatIcon,
    repeatOne: colorMode === "dark" ? RepeatOneDarkModeIcon : RepeatOneIcon,
    repeatOn: colorMode === "dark" ? RepeatOnDarkModeIcon : RepeatOnIcon,
    skipNext: colorMode === "dark" ? SkipNextDarkModeIcon : SkipNextIcon,
    skipPrevious: colorMode === "dark" ? SkipPreviousDarkModeIcon : SkipPreviousIcon,
    visibility: Visibility,
    visibilityOff: VisibilityOff,
    volumeUp: colorMode === "dark" ? VolumeUpDarkModeIcon : VolumeUpIcon,
    volumeOff: colorMode === "dark" ? VolumeOffDarkModeIcon : VolumeOffIcon,
  };

  return icons;
};

export default useIcons;
