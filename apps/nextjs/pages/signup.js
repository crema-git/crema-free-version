import React from 'react';
import AppPage from '@crema/hoc/DefaultPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const SignUP = asyncComponent(() => import('../modules/auth/Signup/index'));
export default AppPage(() => <SignUP />);
