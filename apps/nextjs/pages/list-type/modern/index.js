import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';
import asyncComponent from '../../../@crema/utility/asyncComponent';

const Morden = asyncComponent(() => import('../../../modules/userList/Modern'));
export default AppPage(() => <Morden />);
