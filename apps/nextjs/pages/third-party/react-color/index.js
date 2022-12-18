import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ReactColor = asyncComponent(() =>
  import('../../../modules/thirdParty/reactColor'),
);
export default AppPage(() => <ReactColor />);
