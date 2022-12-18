import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Treemap = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Treemap'),
);
export default AppPage(() => <Treemap />);
