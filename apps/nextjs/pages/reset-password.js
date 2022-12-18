import React from 'react';
import AppPage from '@crema/hoc/DefaultPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ResetPassword = asyncComponent(() =>
  import('../modules/auth/ResetPasswordAwsCognito'),
);
export default AppPage(() => <ResetPassword />);
