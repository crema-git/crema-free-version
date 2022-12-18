import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Bar = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Bar'),
);
export default AppPage(() => <Bar />);
