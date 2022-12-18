import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Radial = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Radial'),
);
export default AppPage(() => <Radial />);
