import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Radar = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Radar'),
);
export default AppPage(() => <Radar />);
