import React from "react";
import { RoutePermittedRole } from "@crema/constants/AppEnums";

const HealthCare = React.lazy(
  () => import("../../../modules/dashboards/HealthCare"),
);
const ECommerce = React.lazy(
  () => import("../../../modules/dashboards/ECommerce"),
);

export const dashBoardConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: "/dashboards/e-commerce",
    element: <ECommerce />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/dashboards/health-care",
    element: <HealthCare />,
  },
];
