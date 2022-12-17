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
      return {...route, auth};
    });
  }

  return [...routes];
};

