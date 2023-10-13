import React from 'react';
import {RoutePermittedRole} from '@crema/constants/AppEnums';

import Overview from '../../../modules/muiComponents/datagrid/Overview';
import Layout from '../../../modules/muiComponents/datagrid/Layout';
import Columns from '../../../modules/muiComponents/datagrid/Columns';
import Rows from '../../../modules/muiComponents/datagrid/Rows';
import Editing from '../../../modules/muiComponents/datagrid/Editing';
import Sorting from '../../../modules/muiComponents/datagrid/Sorting';
import Filtering from '../../../modules/muiComponents/datagrid/Filtering';
import Pagination from '../../../modules/muiComponents/datagrid/Pagination';
import Selection from '../../../modules/muiComponents/datagrid/Selection';
import Events from '../../../modules/muiComponents/datagrid/Events';
import Export from '../../../modules/muiComponents/datagrid/Export';
import Components from '../../../modules/muiComponents/datagrid/Components';
import Styling from '../../../modules/muiComponents/datagrid/Styling';
import Localization from '../../../modules/muiComponents/datagrid/Localization';
import Scrolling from '../../../modules/muiComponents/datagrid/Scrolling';
import Virtualization from '../../../modules/muiComponents/datagrid/Virtualization';
import Accessibility from '../../../modules/muiComponents/datagrid/Accessibility';

export const dataGridConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/overview',
    element: <Overview />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/layout',
    element: <Layout />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/columns',
    element: <Columns />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/rows',
    element: <Rows />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/editing',
    element: <Editing />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/sorting',
    element: <Sorting />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/filtering',
    element: <Filtering />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/pagination',
    element: <Pagination />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/selection',
    element: <Selection />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/events',
    element: <Events />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/export',
    element: <Export />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/components',
    element: <Components />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/styling',
    element: <Styling />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/localization',
    element: <Localization />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/scrolling',
    element: <Scrolling />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/virtualization',
    element: <Virtualization />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/mui/data-grid/accessibility',
    element: <Accessibility />,
  },
];
