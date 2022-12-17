import React from 'react';

const Signin = React.lazy(() => import('../../app/auth/Signin'));
const Signup = React.lazy(() => import('../../app/auth/Signup'));
const ForgotPassword = React.lazy(() => import('../../app/auth/ForgetPassword'));
const ConfirmSignupAwsCognito = React.lazy(() =>
  import('../../app/auth/ConfirmSignupAwsCognito'),
);
const ResetPasswordAwsCognito = React.lazy(() =>
  import('../../app/auth/ResetPasswordAwsCognito'),
);
export const authRouteConfig = [
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/forget-password',
    element: <ForgotPassword />,
  },
  {
    path: '/confirm-signup',
    element: <ConfirmSignupAwsCognito />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordAwsCognito />,
  },
];
