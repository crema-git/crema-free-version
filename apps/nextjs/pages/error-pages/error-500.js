import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Error500 = asyncComponent(() =>
  import('../../modules/errorPages/Error500'),
);
export default AppPage(() => <Error500 />);
