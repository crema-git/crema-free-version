import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ClockPicker, LocalizationProvider } from '@mui/x-date-pickers';

export default function SubComponentsTimePickers() {
  const [date, setDate] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ClockPicker date={date} onChange={(newDate) => setDate(newDate)} />
    </LocalizationProvider>
  );
}
