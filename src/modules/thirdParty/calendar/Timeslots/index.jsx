import React from 'react';
import { dayjsLocalizer } from 'react-big-calendar';
import events from '../events';
import dayjs from 'dayjs';
import { StyledCalendar } from '../calandar.style';

const localizer = dayjsLocalizer(dayjs);

const Timeslots = (props) => {
  return (
    <StyledCalendar
      {...props}
      events={events}
      localizer={localizer}
      step={15}
      timeslots={8}
      defaultView='week'
      defaultDate={new Date(2019, 10, 12)}
    />
  );
};

export default Timeslots;
