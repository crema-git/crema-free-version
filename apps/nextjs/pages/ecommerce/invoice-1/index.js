import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Invoice1 = asyncComponent(() =>
  import('../../../modules/ecommerce/Invoice1'),
);
export default AppPage(() => <Invoice1 />);
