import React from 'react';

const DatePicker = React.lazy(() => import('./DatePicker'));
const DateRangePicker = React.lazy(() => import('./DateRangePicker'));
const DateTimePicker = React.lazy(() => import('./DateTimePicker'));
const Masonry = React.lazy(() => import('./Masonry'));
const Timeline = React.lazy(() => import('./Timeline'));
const TimePicker = React.lazy(() => import('./TimePicker'));
const TrapFocus = React.lazy(() => import('./TrapFocus'));
const TreeView = React.lazy(() => import('./TreeView'));

export {
  Masonry,
  Timeline,
  TimePicker,
  TrapFocus,
  TreeView,
  DatePicker,
  DateRangePicker,
  DateTimePicker,
};
