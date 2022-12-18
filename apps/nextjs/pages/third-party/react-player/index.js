import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ReactPlayer = asyncComponent(() =>
  import('../../../modules/thirdParty/reactPlayer'),
);
export default AppPage(() => <ReactPlayer />);
