export const checkPermission = (routeRole, userRole) => {
  if (!routeRole || !routeRole) {
    return true;
  }

  if (userRole && Array.isArray(userRole) && !Array.isArray(routeRole)) {
    return userRole.indexOf(routeRole) >= 0;
  }
  if (routeRole.length === 0) {
    return !userRole || userRole.length === 0;
  }
  if (userRole && Array.isArray(userRole) && Array.isArray(routeRole)) {
    return routeRole.some((r) => userRole.indexOf(r) >= 0);
  }
  return routeRole.indexOf(userRole) >= 0;
};
export const createRoutes = (routeConfigs) => {
  let allRoutes = [];
  routeConfigs.forEach((config) => {
    allRoutes = [...allRoutes, ...setRoutes(config)];
  });
  return allRoutes;
};

export const setRoutes = (config) => {
  let routes = [...config.routes];
  if (config.auth) {
    routes = routes.map((route) => {
      let auth = route.auth
        ? [...config.auth, ...route.auth]
        : [...config.auth];
      return { ...route, auth };
    });
  }

  return [...routes];
};
