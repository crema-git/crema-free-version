import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Selection = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Selection'),
);
export default AppPage(() => <Selection />);
