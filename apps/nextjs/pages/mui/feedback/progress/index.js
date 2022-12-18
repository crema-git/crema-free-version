import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Progress = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Progress'),
);
export default AppPage(() => <Progress />);
