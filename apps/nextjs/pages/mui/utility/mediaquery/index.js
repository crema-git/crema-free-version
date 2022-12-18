import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const MediaQuery = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/MediaQuery'),
);
export default AppPage(() => <MediaQuery />);
