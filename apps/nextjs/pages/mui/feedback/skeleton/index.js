import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Skeleton = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Skeleton'),
);
export default AppPage(() => <Skeleton />);
