import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Area = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Area'),
);
export default AppPage(() => <Area />);
