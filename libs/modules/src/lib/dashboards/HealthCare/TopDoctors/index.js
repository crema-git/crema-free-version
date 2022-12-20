import React from 'react';
import { useIntl } from 'react-intl';
import AppCard from '@crema/components/AppCard';
import AppMenu from '@crema/components/AppMenu';
import AppList from '@crema/components/AppList';
import DoctorCell from './DoctorCell';
import AppScrollbar from '@crema/components/AppScrollbar';
import PropTypes from 'prop-types';

const TopDoctors = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['healthCare.topDoctors']}
      contentStyle={{ px: 0 }}
      action={<AppMenu />}
    >
      <AppScrollbar sx={{ maxHeight: 280 }}>
        <AppList
          data={data}
          renderRow={(doctor) => <DoctorCell key={doctor.id} doctor={doctor} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default TopDoctors;

TopDoctors.propTypes = {
  data: PropTypes.array,
};
