import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Transitions = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Transitions'),
);
export default AppPage(() => <Transitions />);
