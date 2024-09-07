// import React from 'react';
import { Navigate } from "react-router-dom";

import { authRouteConfig } from "./AuthRoutes";
import Error403 from "../../../modules/errorPages/Error403";
import { errorPagesConfigs } from "./ErrorPagesRoutes";
import { dashBoardConfigs } from "./DashboardsRoutes";
import { userListConfig } from "./UserListRoutes";
import { muiComponentConfigs } from "./MUIComponents";
import { accountPagesConfigs } from "./AccountRoutes";

export const authorizedStructure = (loginUrl) => {
  return {
    fallbackPath: loginUrl,
    unAuthorizedComponent: <Error403 />,
    routes: [
      ...dashBoardConfigs,
      ...accountPagesConfigs,
      ...muiComponentConfigs,
      ...userListConfig,
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
        path: "/",
        element: <Navigate to={initialUrl} />,
      },
      {
        path: "*",
        element: <Navigate to="/error-pages/error-404" />,
      },
    ]),
  };
};
