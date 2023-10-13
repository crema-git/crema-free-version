import { RoutePermittedRole } from '@crema/constants/AppEnums';
import React from 'react';

import Masonry from '../../../modules/muiComponents/lab/Masonry';
import Timeline from '../../../modules/muiComponents/lab/Timeline';
import TrapFocus from '../../../modules/muiComponents/lab/TrapFocus';
import TreeView from '../../../modules/muiComponents/lab/TreeView';
import DatePicker from '../../../modules/muiComponents/lab/DatePicker';
import DateTimePicker from '../../../modules/muiComponents/lab/DateTimePicker';
import TimePicker from '../../../modules/muiComponents/lab/TimePicker';

export const labConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/lab/masonry',
    element: <Masonry />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/lab/timeline',
    element: <Timeline />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/lab/trap-focus',
    element: <TrapFocus />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/lab/tree-view',
    element: <TreeView />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/lab/date-picker',
    element: <DatePicker />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/lab/date-time-picker',
    element: <DateTimePicker />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/lab/time-picker',
    element: <TimePicker />,
  },
];
