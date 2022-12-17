import React from 'react';
import {RoutePermittedRole} from "@crema/constants/AppConst";

const Signin = React.lazy(() => import('../../app/userPages/UserPages/Signin'));
const Signup = React.lazy(() => import('../../app/userPages/UserPages/Signup'));
const ForgetPassword = React.lazy(() => import('../../app/userPages/UserPages/ForgetPassword'));
const ResetPassword = React.lazy(() => import('../../app/userPages/UserPages/ResetPassword'));
const UnlockScreen = React.lazy(() => import('../../app/userPages/UserPages/UnlockScreen'));
const StyledSignin = React.lazy(() => import('../../app/userPages/StyledUserPages/Signin'));
const StyledSignup = React.lazy(() => import('../../app/userPages/StyledUserPages/Signup'));
const StyledForgetPassword = React.lazy(() =>
  import('../../app/userPages/StyledUserPages/ForgetPassword'),
);
const StyledResetPassword = React.lazy(() =>
  import('../../app/userPages/StyledUserPages/ResetPassword'),
);
const StyledUnlockScreen = React.lazy(() =>
  import('../../app/userPages/StyledUserPages/UnlockScreen'),
);

export const userPagesConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/user/sign-in-1',
    element: <Signin />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/user/sign-in-2',
    element: <StyledSignin />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/user/sign-up-1',
    element: <Signup />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/user/sign-up-2',
    element: <StyledSignup />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/user/forgot-password-1',
    element: <ForgetPassword />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/user/forgot-password-2',
    element: <StyledForgetPassword />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/user/reset-password-1',
    element: <ResetPassword />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/user/reset-password-2',
    element: <StyledResetPassword />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/user/lock-1',
    element: <UnlockScreen />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/user/lock-2',
    element: <StyledUnlockScreen />,
  },
];
