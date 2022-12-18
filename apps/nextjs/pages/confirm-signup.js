import React from 'react';
import AppPage from '@crema/hoc/DefaultPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ConfirmSignup = asyncComponent(() =>
  import('../modules/auth/ConfirmSignupAwsCognito'),
);
export default AppPage(() => <ConfirmSignup />);
