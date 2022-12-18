import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ScrumBoard = asyncComponent(() =>
  import('../../../modules/apps/ScrumBoard/Detail'),
);
export default AppPage(() => <ScrumBoard />);
