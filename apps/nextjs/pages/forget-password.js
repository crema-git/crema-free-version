import React from 'react';
import AppPage from '@crema/hoc/DefaultPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ForgetPassword = asyncComponent(() =>
  import('../modules/auth/ForgetPassword/index'),
);
export default AppPage(() => <ForgetPassword />);
