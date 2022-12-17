import {RoutePermittedRole} from "@crema/constants/AppConst";
import React from 'react';

import Masonry from "../../../app/muiComponents/lab/Masonry"
import Timeline from "../../../app/muiComponents/lab/Timeline"
import TrapFocus from "../../../app/muiComponents/lab/TrapFocus"
import TreeView from "../../../app/muiComponents/lab/TreeView"
import DatePicker from "../../../app/muiComponents/lab/DatePicker"
import DateRangePicker from "../../../app/muiComponents/lab/DateRangePicker"
import DateTimePicker from "../../../app/muiComponents/lab/DateTimePicker"
import TimePicker from "../../../app/muiComponents/lab/TimePicker"

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
    path: '/mui/lab/date-range-picker',
    element: <DateRangePicker />,
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
