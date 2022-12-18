import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Backdrop = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Backdrop'),
);
export default AppPage(() => <Backdrop />);
