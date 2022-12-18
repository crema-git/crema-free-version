import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Contact = asyncComponent(() => import('../../../modules/apps/Contact'));
export default AppPage(() => <Contact />);
