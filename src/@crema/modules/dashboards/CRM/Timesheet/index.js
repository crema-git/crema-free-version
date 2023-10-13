import React from 'react';
import AppCard from '@crema/components/AppCard';
import TimesheetTable from './TimesheetTable';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';

const Timesheet = ({timesheet}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      sxStyle={{height: 1}}
      contentStyle={{paddingLeft: 0, paddingRight: 0}}
      title={messages['dashboard.crm.timesheet']}
      action={messages['common.viewAll']}
    >
      <TimesheetTable timesheet={timesheet} />
    </AppCard>
  );
};

export default Timesheet;

Timesheet.propTypes = {
  timesheet: PropTypes.array,
};
