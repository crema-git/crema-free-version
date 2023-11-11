import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

import Box from '../../../../modules/muiComponents/layout/Box';
import Container from '../../../../modules/muiComponents/layout/Container';
import Grid from '../../../../modules/muiComponents/layout/Grid';
import Grid2 from '../../../../modules/muiComponents/layout/Grid2';
import Stack from '../../../../modules/muiComponents/layout/Stack';
import ImageList from '../../../../modules/muiComponents/layout/ImageList';

export const layoutConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/layout/box',
    element: <Box />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/layout/container',
    element: <Container />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/layout/Grid',
    element: <Grid />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/layout/Grid2',
    element: <Grid2 />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/layout/Stack',
    element: <Stack />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/layout/Image-list',
    element: <ImageList />,
  },
];
