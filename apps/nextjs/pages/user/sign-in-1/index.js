import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Signin = asyncComponent(() =>
  import('../../../modules/userPages/UserPages/Signin'),
);
export default AppPage(() => <Signin />);
