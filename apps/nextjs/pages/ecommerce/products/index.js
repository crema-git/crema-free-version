import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Products = asyncComponent(() =>
  import('../../../modules/ecommerce/Products'),
);
export default AppPage(() => <Products />);
