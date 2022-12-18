import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Metrics = asyncComponent(() =>
  import('../../modules/dashboards/Metrics'),
);
export default AppPage(() => <Metrics />);
