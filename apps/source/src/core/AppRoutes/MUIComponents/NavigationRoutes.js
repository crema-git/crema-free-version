import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";

import BottomNavigation   from "../../../app/muiComponents/navigation/BottomNavigation"
import Breadcrumbs   from "../../../app/muiComponents/navigation/Breadcrumbs"
import Drawer   from "../../../app/muiComponents/navigation/Drawer"
import Links   from "../../../app/muiComponents/navigation/Links"
import Menu   from "../../../app/muiComponents/navigation/Menu"
import Pagination   from "../../../app/muiComponents/navigation/Pagination"
import SpeedDial   from "../../../app/muiComponents/navigation/SpeedDial"
import Stepper   from "../../../app/muiComponents/navigation/Stepper"
import Tabs   from "../../../app/muiComponents/navigation/Tabs"

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
