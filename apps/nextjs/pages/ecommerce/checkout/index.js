import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Checkout = asyncComponent(() =>
  import('../../../modules/ecommerce/Checkout'),
);
export default AppPage(() => <Checkout />);
