import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Snackbar = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Snackbar'),
);
export default AppPage(() => <Snackbar />);
