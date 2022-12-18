import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Popover = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Popover'),
);
export default AppPage(() => <Popover />);
