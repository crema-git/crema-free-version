import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Events = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Events'),
);
export default AppPage(() => <Events />);
