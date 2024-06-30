import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import NewspaperIcon from '@mui/icons-material/Newspaper';

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
  { tab: 'Alarm', url: '/alarm', icon: AccessAlarmIcon },
  { tab: 'Audio', url: '/audio', icon: LibraryMusicIcon },
  { tab: 'Article', url: '/article', icon: NewspaperIcon }
]