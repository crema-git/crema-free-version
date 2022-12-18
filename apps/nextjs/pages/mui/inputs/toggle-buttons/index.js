import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ToggleButtons = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/ToggleButtons'),
);
export default AppPage(() => <ToggleButtons />);
