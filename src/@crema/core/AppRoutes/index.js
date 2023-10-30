import React from 'react';
import {Navigate} from 'react-router-dom';

import {authRouteConfig} from './AuthRoutes';
import Error403 from '../../../modules/errorPages/Error403';
import {errorPagesConfigs} from './ErrorPagesRoutes';
import {dashBoardConfigs} from './DashboardsRoutes';
import {extraPagesConfigs} from './ExtraPagesRoutes';
import {ecommerceConfig} from './EcommerceRoutes';
import {userListConfig} from './UserListRoutes';
import {userPagesConfig} from './UserPagesRoutes';
import {muiComponentConfigs} from './MUIComponents';
import {thirdPartyConfigs} from './ThirdPartyRoutes';
import {appsConfig} from './AppsRoutes';
import {accountPagesConfigs} from './AccountRoutes';
import {invoiceConfig} from './InvoiceRoutes';

export const authorizedStructure = (loginUrl) => {
  return {
    fallbackPath: loginUrl,
    unAuthorizedComponent: <Error403 />,
    routes: [
      ...dashBoardConfigs,
      ...accountPagesConfigs,
      ...appsConfig,
      ...thirdPartyConfigs,
      ...extraPagesConfigs,
      ...ecommerceConfig,
      ...muiComponentConfigs,
      ...userPagesConfig,
      ...userListConfig,
      ...invoiceConfig,
    ],
  };
};

export const publicStructure = (initialUrl) => {
  return {
    fallbackPath: initialUrl,
    routes: authRouteConfig,
  };
};
export const anonymousStructure = (initialUrl) => {
  return {
    routes: errorPagesConfigs.concat([
      {
        path: '/',
        element: <Navigate to={initialUrl} />,
      },
      {
        path: '*',
        element: <Navigate to='/error-pages/error-404' />,
      },
    ]),
  };
};
