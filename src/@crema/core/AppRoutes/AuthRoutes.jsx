import React from "react";

const Signin = React.lazy(() => import("../../../modules/auth/Signin"));
const Signup = React.lazy(() => import("../../../modules/auth/Signup"));
export const authRouteConfig = [
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];
