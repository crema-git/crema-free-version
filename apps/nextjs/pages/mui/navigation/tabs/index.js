import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Tabs = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Tabs'),
);
export default AppPage(() => <Tabs />);
