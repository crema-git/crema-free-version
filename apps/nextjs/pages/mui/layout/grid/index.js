import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Grid = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/Grid'),
);
export default AppPage(() => <Grid />);
