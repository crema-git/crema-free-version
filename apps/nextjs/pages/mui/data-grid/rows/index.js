import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Rows = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Rows'),
);
export default AppPage(() => <Rows />);
