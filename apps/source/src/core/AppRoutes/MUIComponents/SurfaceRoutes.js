import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";

import AppBar   from "../../../app/muiComponents/surfaces/AppBar"
import Accordion   from "../../../app/muiComponents/surfaces/Accordion"
import Card   from "../../../app/muiComponents/surfaces/Card"
import Paper   from "../../../app/muiComponents/surfaces/Paper"

export const surfaceConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/surface/appbar',
    element: <AppBar />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/surface/accordion',
    element: <Accordion />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/surface/cards',
    element: <Card />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/surface/paper',
    element: <Paper />,
  },
];
