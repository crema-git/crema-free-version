import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Pie = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Pie'),
);
export default AppPage(() => <Pie />);
