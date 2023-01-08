import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

const AboutUs = React.lazy(() => import('../../modules/extraPages/AboutUs'));
const ContactUs = React.lazy(() =>
  import('../../modules/extraPages/ContactUs'),
);
const KnowledgeBase = React.lazy(() =>
  import('../../modules/extraPages/KnowledgeBase'),
);
const Portfolio = React.lazy(() =>
  import('../../modules/extraPages/Portfolio'),
);
const FAQ = React.lazy(() => import('../../modules/extraPages/FAQ'));
const Pricing = React.lazy(() => import('../../modules/extraPages/Pricing'));

export const extraPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/about-us',
    element: <AboutUs />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/knowledge-base',
    element: <KnowledgeBase />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/portfolio',
    element: <Portfolio />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/faq',
    element: <FAQ />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/contact-us',
    element: <ContactUs />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/pricing',
    element: <Pricing />,
  },
];
