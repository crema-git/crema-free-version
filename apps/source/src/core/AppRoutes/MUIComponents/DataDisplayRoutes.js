import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';
import Avatar from '../../../modules/muiComponents/dataDisplay/Avatar';
import Badges from '../../../modules/muiComponents/dataDisplay/Badges';
import Chips from '../../../modules/muiComponents/dataDisplay/Chips';
import Divider from '../../../modules/muiComponents/dataDisplay/Divider';
import Lists from '../../../modules/muiComponents/dataDisplay/Lists';
import Table from '../../../modules/muiComponents/dataDisplay/Table';
import Tooltip from '../../../modules/muiComponents/dataDisplay/Tooltip';
import Typography from '../../../modules/muiComponents/dataDisplay/Typography';

export const dataDisplayConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-display/avatars',
    element: <Avatar />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-display/badges',
    element: <Badges />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-display/chips',
    element: <Chips />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-display/divider',
    element: <Divider />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-display/lists',
    element: <Lists />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-display/tables',
    element: <Table />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-display/tooltip',
    element: <Tooltip />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-display/typography',
    element: <Typography />,
  },
];
