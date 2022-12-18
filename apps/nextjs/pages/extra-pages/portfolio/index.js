import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Portfolio = asyncComponent(() =>
  import('../../../modules/extraPages/Portfolio'),
);
export default AppPage(() => <Portfolio />);
