import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Steppers = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Stepper'),
);
export default AppPage(() => <Steppers />);
