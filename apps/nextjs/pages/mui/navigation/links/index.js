import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Links = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Links'),
);
export default AppPage(() => <Links />);
