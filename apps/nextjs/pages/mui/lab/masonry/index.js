import React from 'react';
import asyncComponent from '@crema/utility/asyncComponent';
import AppPage from '@crema/hoc/AppPage';

const Masonry = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/Masonry'),
);
export default AppPage(() => <Masonry />);
