import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Badges = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Badges'),
);
export default AppPage(() => <Badges />);
