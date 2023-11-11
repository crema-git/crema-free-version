import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

import ClickawayListener from '../../../../modules/muiComponents/utils/ClickawayListener';
import Modal from '../../../../modules/muiComponents/utils/Modal';
import NoSSR1 from '../../../../modules/muiComponents/utils/NoSSR1';
import Popover from '../../../../modules/muiComponents/utils/Popover';
import Popper from '../../../../modules/muiComponents/utils/Popper';
import Portal from '../../../../modules/muiComponents/utils/Portal';
import Text from '../../../../modules/muiComponents/utils/Text';
import Transitions from '../../../../modules/muiComponents/utils/Transitions';
import MediaQuery from '../../../../modules/muiComponents/utils/MediaQuery';

export const utilConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/utility/click-away-listener',
    element: <ClickawayListener />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/utility/modal/',
    element: <Modal />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/utility/nossr1/',
    element: <NoSSR1 />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/utility/popover/',
    element: <Popover />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/utility/popper/',
    element: <Popper />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/utility/portal/',
    element: <Portal />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/utility/textarea-autosize/',
    element: <Text />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/utility/transitions/',
    element: <Transitions />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/utility/media-query/',
    element: <MediaQuery />,
  },
];
