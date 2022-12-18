import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Invoice2 = asyncComponent(() =>
  import('../../../modules/ecommerce/Invoice2'),
);
export default AppPage(() => <Invoice2 />);
