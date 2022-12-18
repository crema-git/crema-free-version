import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const CRM = asyncComponent(() => import('../../modules/dashboards/CRM'));
export default AppPage(() => <CRM />);
