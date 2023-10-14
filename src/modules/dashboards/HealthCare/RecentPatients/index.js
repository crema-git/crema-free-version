import React from 'react';
import AppCard from '@crema/components/AppCard';
import {useIntl} from 'react-intl';
import AppSelect from '@crema/components/AppSelect';
import PatientsTable from './PatientsTable';
import PropTypes from 'prop-types';

const RecentPatients = ({recentPatients}) => {
  const {messages} = useIntl();
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  return (
    <AppCard
      contentStyle={{paddingLeft: 0, paddingRight: 0, paddingBottom: 8}}
      title={messages['healthCare.recentPatient']}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }
    >
      <PatientsTable recentPatients={recentPatients} />
    </AppCard>
  );
};

export default RecentPatients;

RecentPatients.propTypes = {
  recentPatients: PropTypes.array.isRequired,
};
