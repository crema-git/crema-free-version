import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";

const HealthCare = React.lazy(() => import('../../app/dashboards/HealthCare'));
const ECommerce = React.lazy(() => import('../../app/dashboards/ECommerce'));
const CRM = React.lazy(() => import('../../app/dashboards/CRM'));
const Crypto = React.lazy(() => import('../../app/dashboards/Crypto'));
const Analytics = React.lazy(() => import('../../app/dashboards/Analytics'));
const Academy = React.lazy(() => import('../../app/dashboards/Academy'));
const Metrics = React.lazy(() => import('../../app/dashboards/Metrics'));
const Widgets = React.lazy(() => import('../../app/dashboards/Widgets'));

export const dashBoardConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/academy',
    element: <Academy />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/analytics',
    element: <Analytics />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/e-commerce',
    element: <ECommerce />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/crm',
    element: <CRM />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/health-care',
    element: <HealthCare />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/crypto',
    element: <Crypto />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/metrics',
    element: <Metrics />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/widgets',
    element: <Widgets />,
  },
];
