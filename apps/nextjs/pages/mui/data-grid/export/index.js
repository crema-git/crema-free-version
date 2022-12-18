import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Export = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Export'),
);
export default AppPage(() => <Export />);
