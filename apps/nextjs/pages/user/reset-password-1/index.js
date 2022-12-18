import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ResetPassword = asyncComponent(() =>
  import('../../../modules/userPages/UserPages/ResetPassword'),
);
export default AppPage(() => <ResetPassword />);
