import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Layouts } from '@crema/components/AppLayout';
import AppContentView from '@crema/components/AppContentView';
import generateRoutes from '@crema/utility/RouteGenerator';
import { useAuthUser } from '@crema/utility/AuthHooks';
import { useLayoutContext } from '@crema/context/LayoutContextProvider';
import {
  anonymousStructure,
  authorizedStructure,
  unAuthorizedStructure,
} from '../AppRoutes';
import routesConfig from '../AppRoutes/routeConfig';

const AppLayout = () => {
  const { navStyle } = useLayoutContext();

  const { user, isAuthenticated } = useAuthUser();
  const AppLayout = Layouts[navStyle];
  const generatedRoutes = generateRoutes({
    isAuthenticated: isAuthenticated,
    userRole: user?.role,
    unAuthorizedStructure,
    authorizedStructure,
    anonymousStructure,
  });
  const routes = useRoutes(generatedRoutes);

  return (
    <>
      {isAuthenticated ? (
        <AppLayout routes={routes} routesConfig={routesConfig} />
      ) : (
        <AppContentView routes={routes} />
      )}
    </>
  );
};

export default AppLayout;
