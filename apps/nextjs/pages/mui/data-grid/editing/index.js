import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Editing = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Editing'),
);
export default AppPage(() => <Editing />);
