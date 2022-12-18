import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Avatars = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Avatar'),
);
export default AppPage(() => <Avatars />);
