import React from 'react';
import asyncComponent from '@crema/utility/asyncComponent';
import AppPage from '@crema/hoc/AppPage';

const Timeline = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/Timeline'),
);
export default AppPage(() => <Timeline />);
