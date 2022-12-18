import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Columns = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Columns'),
);
export default AppPage(() => <Columns />);
