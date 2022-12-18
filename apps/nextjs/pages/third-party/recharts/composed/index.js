import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Composed = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Composed'),
);
export default AppPage(() => <Composed />);
