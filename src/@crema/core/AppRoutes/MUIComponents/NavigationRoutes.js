import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

import BottomNavigation from '../../../../modules/muiComponents/navigation/BottomNavigation';
import Breadcrumbs from '../../../../modules/muiComponents/navigation/Breadcrumbs';
import Drawer from '../../../../modules/muiComponents/navigation/Drawer';
import Links from '../../../../modules/muiComponents/navigation/Links';
import Menu from '../../../../modules/muiComponents/navigation/Menu';
import Pagination from '../../../../modules/muiComponents/navigation/Pagination';
import SpeedDial from '../../../../modules/muiComponents/navigation/SpeedDial';
import Stepper from '../../../../modules/muiComponents/navigation/Stepper';
import Tabs from '../../../../modules/muiComponents/navigation/Tabs';

export const navigationConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/navigation/bottom-navigation',
    element: <BottomNavigation />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/navigation/breadcrumbs',
    element: <Breadcrumbs />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/navigation/drawers',
    element: <Drawer />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/navigation/links',
    element: <Links />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/navigation/menus',
    element: <Menu />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/navigation/pagination',
    element: <Pagination />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/navigation/speed-dial',
    element: <SpeedDial />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/navigation/steppers',
    element: <Stepper />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/navigation/tabs',
    element: <Tabs />,
  },
];
