import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Pagination = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Pagination'),
);
export default AppPage(() => <Pagination />);
