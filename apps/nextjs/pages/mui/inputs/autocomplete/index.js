import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const AutoComplete = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/AutoComplete'),
);
export default AppPage(() => <AutoComplete />);
