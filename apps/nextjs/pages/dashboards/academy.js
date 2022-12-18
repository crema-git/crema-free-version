import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Academy = asyncComponent(() =>
  import('../../modules/dashboards/Academy'),
);
export default AppPage(() => <Academy />);
