import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Flat = asyncComponent(() => import('../../../modules/userList/Flat'));
export default AppPage(() => <Flat />);
