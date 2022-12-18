import React from 'react';
import asyncComponent from '@crema/utility/asyncComponent';
import AppPage from '@crema/hoc/AppPage';

const DateTimePicker = asyncComponent(() =>
  import('../../../../../modules/muiComponents/lab/dateTime/DateTimePicker'),
);
export default AppPage(() => <DateTimePicker />);
