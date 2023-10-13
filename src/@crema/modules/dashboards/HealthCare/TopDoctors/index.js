import React from 'react';
import {useIntl} from 'react-intl';
import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import DoctorCell from './DoctorCell';
import AppScrollbar from '@crema/components/AppScrollbar';
import PropTypes from 'prop-types';

const TopDoctors = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      title={messages['healthCare.topDoctors']}
      contentStyle={{paddingLeft: 0, paddingRight: 0}}
      action={messages['common.viewAll']}
    >
      <AppScrollbar style={{maxHeight: 280}}>
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
  data: PropTypes.array.isRequired,
};
