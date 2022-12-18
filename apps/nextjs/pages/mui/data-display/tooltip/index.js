import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Tooltip = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Tooltip'),
);
export default AppPage(() => <Tooltip />);
