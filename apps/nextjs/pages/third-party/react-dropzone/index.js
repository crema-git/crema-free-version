import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ReactDropzone = asyncComponent(() =>
  import('../../../modules/thirdParty/reactDropzone'),
);
export default AppPage(() => <ReactDropzone />);
