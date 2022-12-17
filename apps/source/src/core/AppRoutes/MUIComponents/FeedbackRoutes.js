import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";

import Alert  from "../../../app/muiComponents/feedback/Alert"
import Backdrop  from "../../../app/muiComponents/feedback/Backdrop"
import Dialog  from "../../../app/muiComponents/feedback/Dialog"
import Progress  from "../../../app/muiComponents/feedback/Progress"
import Skeleton  from "../../../app/muiComponents/feedback/Skeleton"
import Snackbar  from "../../../app/muiComponents/feedback/Snackbar"

export const feedbackConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/feedback/alert',
    element: <Alert />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/feedback/backdrop',
    element: <Backdrop />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/feedback/dialog',
    element: <Dialog />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/feedback/progress',
    element: <Progress />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/feedback/skeleton',
    element: <Skeleton />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/feedback/snackbars',
    element: <Snackbar />,
  },
];
