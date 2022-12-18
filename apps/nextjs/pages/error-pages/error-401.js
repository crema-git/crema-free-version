import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Error401 = asyncComponent(() =>
  import('../../modules/errorPages/Error401'),
);
export default AppPage(() => <Error401 />);
