import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";

import Overview from "../../../app/muiComponents/datagrid/Overview"
import Layout from "../../../app/muiComponents/datagrid/Layout"
import Columns from "../../../app/muiComponents/datagrid/Columns"
import Rows from "../../../app/muiComponents/datagrid/Rows"
import Editing from "../../../app/muiComponents/datagrid/Editing"
import Sorting from "../../../app/muiComponents/datagrid/Sorting"
import Filtering from "../../../app/muiComponents/datagrid/Filtering"
import Pagination from "../../../app/muiComponents/datagrid/Pagination"
import Selection from "../../../app/muiComponents/datagrid/Selection"
import Events from "../../../app/muiComponents/datagrid/Events"
import Export from "../../../app/muiComponents/datagrid/Export"
import Components from "../../../app/muiComponents/datagrid/Components"
import Styling from "../../../app/muiComponents/datagrid/Styling"
import Localization from "../../../app/muiComponents/datagrid/Localization"
import Scrolling from "../../../app/muiComponents/datagrid/Scrolling"
import Virtualization from "../../../app/muiComponents/datagrid/Virtualization"
import Accessibility from "../../../app/muiComponents/datagrid/Accessibility"

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
