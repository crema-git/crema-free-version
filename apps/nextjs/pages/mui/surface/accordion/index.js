import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const Accordion = asyncComponent(() =>
  import('../../../../modules/muiComponents/surfaces/Accordion'),
);
export default AppPage(() => <Accordion />);
