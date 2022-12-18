import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Error403 = asyncComponent(() =>
  import('../../modules/errorPages/Error403'),
);
export default AppPage(() => <Error403 />);
