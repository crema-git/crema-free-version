import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Modal = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Modal'),
);
export default AppPage(() => <Modal />);
