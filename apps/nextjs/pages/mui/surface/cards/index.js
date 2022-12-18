import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Cards = asyncComponent(() =>
  import('../../../../modules/muiComponents/surfaces/Card'),
);
export default AppPage(() => <Cards />);
