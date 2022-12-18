import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Pricing = asyncComponent(() =>
  import('../../../modules/extraPages/Pricing'),
);
export default AppPage(() => <Pricing />);
