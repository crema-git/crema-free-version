import React from 'react';
import {useIntl} from 'react-intl';
import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import AppointmentCell from './AppointmentCell';
import AppScrollbar from '@crema/components/AppScrollbar';
import PropTypes from 'prop-types';

const UpcomingAppointments = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      contentStyle={{paddingLeft: 0, paddingRight: 0}}
      title={messages['healthCare.upcomingAppointments']}
      action={messages['common.viewAll']}
    >
      <AppScrollbar style={{maxHeight: 280}}>
        <AppList
          data={data}
          renderRow={(appointment) => (
            <AppointmentCell key={appointment.id} appointment={appointment} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default UpcomingAppointments;

UpcomingAppointments.propTypes = {
  data: PropTypes.array.isRequired,
};
