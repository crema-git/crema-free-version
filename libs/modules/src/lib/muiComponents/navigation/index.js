import React from 'react';

const BottomNavigation = React.lazy(() => import('./BottomNavigation'));
const Breadcrumbs = React.lazy(() => import('./Breadcrumbs'));
const Drawer = React.lazy(() => import('./Drawer'));
const Links = React.lazy(() => import('./Links'));
const Menu = React.lazy(() => import('./Menu'));
const Pagination = React.lazy(() => import('./Pagination'));
const SpeedDial = React.lazy(() => import('./SpeedDial'));
const Stepper = React.lazy(() => import('./Stepper'));
const Tabs = React.lazy(() => import('./Tabs'));

export {
  BottomNavigation,
  Breadcrumbs,
  Drawer,
  Links,
  Menu,
  Pagination,
  SpeedDial,
  Stepper,
  Tabs,
};
