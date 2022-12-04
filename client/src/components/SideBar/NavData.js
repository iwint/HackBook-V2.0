import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import PolicyIcon from '@mui/icons-material/Policy';
import { SvgIcon } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '../../assets/Icons/DashboardIcon';
import UsersIcon from '../../assets/Icons/UsersIcon';
export const items = [
  // {
  //   title: 'Orgin Tracker',
  //   to: '/orgintracker',
  //   icon: (
  //     <SvgIcon
  //       component={CompassCalibrationIcon}
  //       inheritViewBox
  //       sx={{ color: '#A3AED0' }}
  //     />
  //   ),
  // },
  // {
  //   title: 'DNS Lookup',
  //   to: '/dnslookup',
  //   icon: (
  //     <SvgIcon
  //       component={TravelExploreIcon}
  //       sx={{ color: '#A3AED0' }}
  //       inheritViewBox
  //     />
  //   ),
  // },
  // {
  //   title: 'Email Tracker',
  //   to: '/emailtracker',
  //   icon: (
  //     <SvgIcon
  //       component={AlternateEmailIcon}
  //       sx={{ color: '#A3AED0' }}
  //       inheritViewBox
  //     />
  //   ),
  // },
  // {
  //   title: 'Port Scan',
  //   to: '/portscan',
  //   icon: (
  //     <SvgIcon
  //       component={PolicyIcon}
  //       sx={{ color: '#A3AED0' }}
  //       inheritViewBox
  //     />
  //   ),
  // },

  {
    title: 'Dashboard',
    to: '/',
    icon: (
      <SvgIcon
        component={DashboardIcon}
        sx={{ color: '#A3AED0' }}
        inheritViewBox
      />
    ),
  },
  {
    title: 'Criminal Records',
    to: '/records',
    icon: (
      <SvgIcon component={UsersIcon} sx={{ color: '#A3AED0' }} inheritViewBox />
    ),
  },
  {
    title: 'Face Detect',
    to: '/facedetect',
    icon: (
      <SvgIcon
        component={LinkedCameraIcon}
        sx={{ color: '#A3AED0' }}
        inheritViewBox
      />
    ),
  },
  {
    title: 'Email OSLINT',
    to: '/emailoslint',
    icon: (
      <SvgIcon
        component={CompassCalibrationIcon}
        inheritViewBox
        sx={{ color: '#A3AED0' }}
      />
    ),
  },
  {
    title: 'Setting',
    to: '/setting',
    icon: (
      <SvgIcon
        component={SettingsIcon}
        sx={{ color: '#A3AED0' }}
        inheritViewBox
      />
    ),
  },
];
