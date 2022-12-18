import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const BottomNavigation = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/BottomNavigation'),
);
export default AppPage(() => <BottomNavigation />);
