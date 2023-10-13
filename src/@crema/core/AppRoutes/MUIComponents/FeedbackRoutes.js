import React from 'react';
import {RoutePermittedRole} from '@crema/constants/AppEnums';

import Alert from '../../../modules/muiComponents/feedback/Alert';
import Backdrop from '../../../modules/muiComponents/feedback/Backdrop';
import Dialog from '../../../modules/muiComponents/feedback/Dialog';
import Progress from '../../../modules/muiComponents/feedback/Progress';
import Skeleton from '../../../modules/muiComponents/feedback/Skeleton';
import Snackbar from '../../../modules/muiComponents/feedback/Snackbar';

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
