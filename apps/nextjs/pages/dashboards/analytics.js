import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Analytics = asyncComponent(() =>
  import('../../modules/dashboards/Analytics'),
);
export default AppPage(() => <Analytics />);
