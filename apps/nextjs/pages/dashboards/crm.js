import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const CRM = asyncComponent(() => import('../../modules/dashboards/CRM'));
export default AppPage(() => <CRM />);
