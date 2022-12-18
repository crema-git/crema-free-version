import React from 'react';
import AppPage from '@crema/hoc/DefaultPage';
import asyncComponent from "@crema/components/AppAsyncComponent"

const SignIn = asyncComponent(() => import('../modules/auth/Signin/index'));
export default AppPage(() => <SignIn />);
