import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ReactNotification = asyncComponent(() =>
  import('../../../modules/thirdParty/reactNotification'),
);
export default AppPage(() => <ReactNotification />);
