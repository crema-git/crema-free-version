import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Error404 = asyncComponent(() =>
  import('../../modules/errorPages/Error404'),
);
export default AppPage(() => <Error404 />);
