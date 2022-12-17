import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";

import AutoComplete   from "../../../app/muiComponents/inputs/AutoComplete"
import Buttons   from "../../../app/muiComponents/inputs/Buttons"
import ButtonGroup   from "../../../app/muiComponents/inputs/ButtonGroup"
import Checkboxes   from "../../../app/muiComponents/inputs/Checkboxes"
import FloatingActionButton   from "../../../app/muiComponents/inputs/FloatingActionButton"
import Radio   from "../../../app/muiComponents/inputs/Radio"
import Rating   from "../../../app/muiComponents/inputs/Rating"
import Selects   from "../../../app/muiComponents/inputs/Selects"
import Slider   from "../../../app/muiComponents/inputs/Slider"
import Switches   from "../../../app/muiComponents/inputs/Switches"
import TextField   from "../../../app/muiComponents/inputs/TextField"
import TransferList   from "../../../app/muiComponents/inputs/TransferList"
import ToggleButtons   from "../../../app/muiComponents/inputs/ToggleButtons"

export const inputsConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/autocomplete',
    element: <AutoComplete />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/buttons',
    element: <Buttons />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/button-group',
    element: <ButtonGroup />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/checkboxes',
    element: <Checkboxes />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/floating-action-button',
    element: <FloatingActionButton />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/radios',
    element: <Radio />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/rating',
    element: <Rating />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/selects',
    element: <Selects />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/slider',
    element: <Slider />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/switches',
    element: <Switches />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/text-fields',
    element: <TextField />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/transfer-list',
    element: <TransferList />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/inputs/toggle-buttons',
    element: <ToggleButtons />,
  },
];
