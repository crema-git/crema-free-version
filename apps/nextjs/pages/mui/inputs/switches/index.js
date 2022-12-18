import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Switches = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Switches'),
);
export default AppPage(() => <Switches />);
