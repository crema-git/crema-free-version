import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Stack = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/Stack'),
);
export default AppPage(() => <Stack />);
