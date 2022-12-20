import React from 'react';

const ClickawayListener = React.lazy(() => import('./ClickawayListener'));
const Modal = React.lazy(() => import('./Modal'));
const NoSSR1 = React.lazy(() => import('./NoSSR1'));
const Popover = React.lazy(() => import('./Popover'));
const Popper = React.lazy(() => import('./Popper'));
const Portal = React.lazy(() => import('./Portal'));
const Text = React.lazy(() => import('./Text'));
const Transitions = React.lazy(() => import('./Transitions'));
const MediaQuery = React.lazy(() => import('./MediaQuery'));
const TextareaAutosize = React.lazy(() => import('./TextareaAutosize'));

export {
  ClickawayListener,
  Modal,
  NoSSR1,
  Popover,
  Popper,
  Portal,
  Text,
  Transitions,
  TextareaAutosize,
  MediaQuery,
};
