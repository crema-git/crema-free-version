import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Portal = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Portal'),
);
export default AppPage(() => <Portal />);
