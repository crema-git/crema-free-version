import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Dialogs = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Dialog'),
);
export default AppPage(() => <Dialogs />);
