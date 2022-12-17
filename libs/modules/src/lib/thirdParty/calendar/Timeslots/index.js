import React from 'react';
import {momentLocalizer} from 'react-big-calendar';
import events from '../events';
import moment from 'moment';
import {StyledCalendar} from '../calandar.style';

const localizer = momentLocalizer(moment);

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
