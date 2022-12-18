import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Typography = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Typography'),
);
export default AppPage(() => <Typography />);
