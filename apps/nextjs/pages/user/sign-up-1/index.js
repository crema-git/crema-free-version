import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Signup = asyncComponent(() =>
  import('../../../modules/userPages/UserPages/Signup'),
);
export default AppPage(() => <Signup />);
