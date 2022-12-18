import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Selects = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Selects'),
);
export default AppPage(() => <Selects />);
