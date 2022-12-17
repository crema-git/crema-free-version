import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";

import ClickawayListener   from "../../../app/muiComponents/utils/ClickawayListener"
import Modal   from "../../../app/muiComponents/utils/Modal"
import NoSSR1   from "../../../app/muiComponents/utils/NoSSR1"
import Popover   from "../../../app/muiComponents/utils/Popover"
import Popper   from "../../../app/muiComponents/utils/Popper"
import Portal   from "../../../app/muiComponents/utils/Portal"
import Text   from "../../../app/muiComponents/utils/Text"
import Transitions   from "../../../app/muiComponents/utils/Transitions"
import MediaQuery   from "../../../app/muiComponents/utils/MediaQuery"

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
