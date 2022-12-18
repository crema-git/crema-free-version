import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const ImageList = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/ImageList'),
);
export default AppPage(() => <ImageList />);
