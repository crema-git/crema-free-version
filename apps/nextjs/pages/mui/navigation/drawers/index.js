import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Drawers = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Drawer'),
);
export default AppPage(() => <Drawers />);
