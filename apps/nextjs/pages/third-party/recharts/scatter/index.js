import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Scatter = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Scatter'),
);
export default AppPage(() => <Scatter />);
