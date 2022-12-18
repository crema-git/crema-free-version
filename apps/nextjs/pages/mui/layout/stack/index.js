import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Stack = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/Stack'),
);
export default AppPage(() => <Stack />);
