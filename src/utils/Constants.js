import {
  AlarmIcon,
  AlarmActiveIcon,
  LibraryMusicIcon,
  LibraryMusicActiveIcon,
  NewspaperIcon,
  NewspaperActiveIcon
} from '../assets/icons';

export const days = [
  { id: 0, label: 'S', value: 'Sun' },
  { id: 1, label: 'M', value: 'Mon' },
  { id: 2, label: 'T', value: 'Tue' },
  { id: 3, label: 'W', value: 'Wed' },
  { id: 4, label: 'T', value: 'Thu' },
  { id: 5, label: 'F', value: 'Fri' },
  { id: 6, label: 'S', value: 'Sat' },
]

export const footerTab = [
  { tab: 'Alarm', url: '/alarm', icon: AlarmIcon, iconActive: AlarmActiveIcon },
  { tab: 'Audio', url: '/audio', icon: LibraryMusicIcon, iconActive: LibraryMusicActiveIcon },
  { tab: 'Article', url: '/article', icon: NewspaperIcon, iconActive: NewspaperActiveIcon }
]

export const MusicInstances = [
  {
    id: "t1",
    src: "/music.mp3",
    title: "Need (unreleased)",
    artist: "Taylor Swift",
    album: "Lover",
    duration: "3:05",
    imageUrl: "https://bit.ly/dan-abramov",
  },
  {
    id: "t2",
    src: "/alarm.mp3",
    title: "Out Of My Mind",
    artist: "Refuzion",
    album: "Album Name",
    duration: "2:45",
    imageUrl: "https://bit.ly/dan-abramov",
  },
  {
    id: "t3",
    src: "/music.mp3",
    title: "Maria Tambien",
    artist: "Khruangbin",
    album: "Album Name",
    duration: "3:05",
    imageUrl: "https://bit.ly/dan-abramov",
  },
  {
    id: "t6",
    src: "/alarm.mp3",
    title: "The Moment (Outro)",
    artist: "Bell Witch",
    album: "Album Name",
    duration: "3:06",
    imageUrl: "https://bit.ly/dan-abramov",
  },
];