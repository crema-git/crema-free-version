import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Lists = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Lists'),
);
export default AppPage(() => <Lists />);
