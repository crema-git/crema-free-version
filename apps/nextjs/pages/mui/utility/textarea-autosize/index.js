import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const TextareaAutosize = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/TextareaAutosize'),
);
export default AppPage(() => <TextareaAutosize />);
