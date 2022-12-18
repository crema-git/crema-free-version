import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const TimeLine = asyncComponent(() =>
  import('../../../modules/thirdParty/reactSlick'),
);
export default AppPage(() => <TimeLine />);
