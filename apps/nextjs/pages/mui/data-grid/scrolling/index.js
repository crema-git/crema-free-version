import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Scrolling = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Scrolling'),
);
export default AppPage(() => <Scrolling />);
