import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

import AutoComplete from '../../../../modules/muiComponents/inputs/AutoComplete';
import Buttons from '../../../../modules/muiComponents/inputs/Buttons';
import ButtonGroup from '../../../../modules/muiComponents/inputs/ButtonGroup';
import Checkboxes from '../../../../modules/muiComponents/inputs/Checkboxes';
import FloatingActionButton from '../../../../modules/muiComponents/inputs/FloatingActionButton';
import Radio from '../../../../modules/muiComponents/inputs/Radio';
import Rating from '../../../../modules/muiComponents/inputs/Rating';
import Selects from '../../../../modules/muiComponents/inputs/Selects';
import Slider from '../../../../modules/muiComponents/inputs/Slider';
import Switches from '../../../../modules/muiComponents/inputs/Switches';
import TextField from '../../../../modules/muiComponents/inputs/TextField';
import TransferList from '../../../../modules/muiComponents/inputs/TransferList';
import ToggleButtons from '../../../../modules/muiComponents/inputs/ToggleButtons';

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
