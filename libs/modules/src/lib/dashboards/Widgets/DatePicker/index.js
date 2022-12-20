import React from 'react';
import { TextField } from '@mui/material';
import AppCard from '@crema/components/AppCard';
import CalendarWrapper from './CalendarWrapper';
import { StaticDatePicker } from '@mui/x-date-pickers';

const DateSelector = () => {
  const [value, setValue] = React.useState(new Date());

  return (
    <AppCard sxStyle={{ height: 1 }} contentStyle={{ padding: 0 }}>
      <CalendarWrapper>
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </CalendarWrapper>
    </AppCard>
  );
};

export default DateSelector;
