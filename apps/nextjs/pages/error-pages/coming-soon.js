import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ComingSoon = asyncComponent(() =>
  import('../../modules/errorPages/ComingSoon'),
);
export default AppPage(() => <ComingSoon />);
