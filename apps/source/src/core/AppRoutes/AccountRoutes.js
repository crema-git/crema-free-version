import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";
import Account from '../../app/account/MyProfile';

export const accountPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/my-profile',
    element: <Account />,
  },
];
