import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Chips = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Chips'),
);
export default AppPage(() => <Chips />);
