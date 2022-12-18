import React from 'react';
import asyncComponent from '@crema/utility/asyncComponent';
import AppPage from '@crema/hoc/AppPage';

const DateRangePicker = asyncComponent(() =>
  import('../../../../../modules/muiComponents/lab/dateTime/DateRangePicker'),
);
export default AppPage(() => <DateRangePicker />);
