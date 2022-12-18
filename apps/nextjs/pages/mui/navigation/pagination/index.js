import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Pagination = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Pagination'),
);
export default AppPage(() => <Pagination />);
