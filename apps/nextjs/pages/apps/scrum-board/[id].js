import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';
import asyncComponent from '../../../@crema/utility/asyncComponent';

const ScrumBoard = asyncComponent(() =>
  import('../../../modules/apps/ScrumBoard/Detail'),
);
export default AppPage(() => <ScrumBoard />);
