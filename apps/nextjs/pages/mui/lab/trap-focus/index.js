import React from 'react';
import asyncComponent from '@crema/utility/asyncComponent';
import AppPage from '@crema/hoc/AppPage';

const TrapFocus = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/TrapFocus'),
);
export default AppPage(() => <TrapFocus />);
