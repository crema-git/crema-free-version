import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Funnel = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Funnel'),
);
export default AppPage(() => <Funnel />);
