import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Virtualization = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Virtualization'),
);
export default AppPage(() => <Virtualization />);
