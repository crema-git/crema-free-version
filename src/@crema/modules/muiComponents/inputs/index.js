import React from 'react';

const AutoComplete = React.lazy(() => import('./AutoComplete'));
const Buttons = React.lazy(() => import('./Buttons'));
const ButtonGroup = React.lazy(() => import('./ButtonGroup'));
const Checkboxes = React.lazy(() => import('./Checkboxes'));
const FloatingActionButton = React.lazy(() => import('./FloatingActionButton'));
const Radio = React.lazy(() => import('./Radio'));
const Rating = React.lazy(() => import('./Rating'));
const Selects = React.lazy(() => import('./Selects'));
const Slider = React.lazy(() => import('./Slider'));
const Switches = React.lazy(() => import('./Switches'));
const TextField = React.lazy(() => import('./TextField'));
const TransferList = React.lazy(() => import('./TransferList'));
const ToggleButtons = React.lazy(() => import('./ToggleButtons'));

export {
  AutoComplete,
  Buttons,
  ButtonGroup,
  Checkboxes,
  FloatingActionButton,
  Radio,
  Rating,
  Selects,
  Slider,
  Switches,
  TextField,
  TransferList,
  ToggleButtons,
};
