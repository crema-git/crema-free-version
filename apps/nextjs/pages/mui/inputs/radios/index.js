import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const RadiosButton = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Radio'),
);
export default AppPage(() => <RadiosButton />);
