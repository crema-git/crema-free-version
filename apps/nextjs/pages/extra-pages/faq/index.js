import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const FAQ = asyncComponent(() => import('../../../modules/extraPages/FAQ'));
export default AppPage(() => <FAQ />);
