import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

import AppBar from '../../../modules/muiComponents/surfaces/AppBar';
import Accordion from '../../../modules/muiComponents/surfaces/Accordion';
import Card from '../../../modules/muiComponents/surfaces/Card';
import Paper from '../../../modules/muiComponents/surfaces/Paper';

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
