import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Rating = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Rating'),
);
export default AppPage(() => <Rating />);
