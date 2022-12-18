import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Styling = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Styling'),
);
export default AppPage(() => <Styling />);
