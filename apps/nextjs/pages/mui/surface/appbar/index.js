import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const AppBar = asyncComponent(() =>
  import('../../../../modules/muiComponents/surfaces/AppBar'),
);
export default AppPage(() => <AppBar />);
