import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";
const Flat = React.lazy(() => import('../../app/userList/Flat'));
const Modern = React.lazy(() => import('../../app/userList/Modern'));
const Standard = React.lazy(() => import('../../app/userList/Standard'));

export const userListConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/list-type/flat',
    element: <Flat />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/list-type/morden',
    element: <Modern />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/list-type/standard',
    element: <Standard />,
  },
];
