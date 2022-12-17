import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";
import Avatar from "../../../app/muiComponents/dataDisplay/Avatar";
import Badges from "../../../app/muiComponents/dataDisplay/Badges";
import Chips from "../../../app/muiComponents/dataDisplay/Chips";
import Divider from "../../../app/muiComponents/dataDisplay/Divider";
import Lists from "../../../app/muiComponents/dataDisplay/Lists";
import Table from "../../../app/muiComponents/dataDisplay/Table";
import Tooltip from "../../../app/muiComponents/dataDisplay/Tooltip";
import Typography from "../../../app/muiComponents/dataDisplay/Typography";

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
