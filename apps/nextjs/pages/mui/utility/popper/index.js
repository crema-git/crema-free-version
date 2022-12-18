import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Popper = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Popper'),
);
export default AppPage(() => <Popper />);
