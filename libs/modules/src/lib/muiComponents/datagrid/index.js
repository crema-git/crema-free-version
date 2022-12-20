import React from 'react';

const Overview = React.lazy(() => import('./Overview'));
const Layout = React.lazy(() => import('./Layout'));
const Columns = React.lazy(() => import('./Columns'));
const Rows = React.lazy(() => import('./Rows'));
const Editing = React.lazy(() => import('./Editing'));
const Sorting = React.lazy(() => import('./Sorting'));
const Filtering = React.lazy(() => import('./Filtering'));
const Pagination = React.lazy(() => import('./Pagination'));
const Selection = React.lazy(() => import('./Selection'));
const Events = React.lazy(() => import('./Events'));
const Export = React.lazy(() => import('./Export'));
const Components = React.lazy(() => import('./Components'));
const Styling = React.lazy(() => import('./Styling'));
const Localization = React.lazy(() => import('./Localization'));
const Scrolling = React.lazy(() => import('./Scrolling'));
const Virtualization = React.lazy(() => import('./Virtualization'));
const Accessibility = React.lazy(() => import('./Accessibility'));

export {
  Overview,
  Layout,
  Columns,
  Rows,
  Editing,
  Sorting,
  Filtering,
  Pagination,
  Selection,
  Events,
  Export,
  Components,
  Styling,
  Localization,
  Scrolling,
  Virtualization,
  Accessibility,
};
