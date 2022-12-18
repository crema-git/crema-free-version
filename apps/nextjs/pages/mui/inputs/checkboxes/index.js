import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Checkboxes = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Checkboxes'),
);
export default AppPage(() => <Checkboxes />);
