import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent from '@crema/utility/asyncComponent';

const Account = asyncComponent(() => import('modules/account/MyProfile'));
export default AppPage(() => <Account />);
