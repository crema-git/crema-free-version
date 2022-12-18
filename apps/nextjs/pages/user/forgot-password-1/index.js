import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ForgetPassword = asyncComponent(() =>
  import('../../../modules/userPages/UserPages/ForgetPassword'),
);
export default AppPage(() => <ForgetPassword />);
