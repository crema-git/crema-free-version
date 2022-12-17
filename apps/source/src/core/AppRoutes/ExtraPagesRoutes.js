import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";

const AboutUs = React.lazy(() => import('../../app/extraPages/AboutUs'));
const ContactUs = React.lazy(() => import('../../app/extraPages/ContactUs'));
const KnowledgeBase = React.lazy(() => import('../../app/extraPages/KnowledgeBase'));
const Portfolio = React.lazy(() => import('../../app/extraPages/Portfolio'));
const FAQ = React.lazy(() => import('../../app/extraPages/FAQ'));
const Pricing = React.lazy(() => import('../../app/extraPages/Pricing'));

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
