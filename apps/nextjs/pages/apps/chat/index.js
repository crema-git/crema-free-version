import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Chat = asyncComponent(() => import('../../../modules/apps/Chat'));
export default AppPage(() => <Chat />);
