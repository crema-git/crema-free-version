import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const GoogleMap = asyncComponent(() =>
  import('../../../modules/thirdParty/googleMap'),
);
export default AppPage(() => <GoogleMap />);
