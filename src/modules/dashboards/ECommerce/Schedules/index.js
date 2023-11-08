import React from 'react';
import AppCard from '@crema/components/AppCard';
import DateSelector from './DateSelector';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import Typography from '@mui/material/Typography';

import {styled} from '@mui/material/styles';
import AppList from '@crema/components/AppList';

const SchedulesRoot = styled('div')(({theme}) => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    '& .schedules-item': {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '50%',
        paddingRight: 20,
      },
      '&:not(:first-of-type)': {
        borderTop: `solid 1px ${theme.palette.divider}`,
        paddingTop: 20,
        marginTop: 20,
        paddingRight: 0,
        [theme.breakpoints.up('sm')]: {
          borderLeft: `solid 1px ${theme.palette.divider}`,
          paddingLeft: 20,
          borderTop: '0 none',
          paddingTop: 0,
          marginTop: 0,
        },
      },
    },
  };
});
const ScheduleCellWrapper = styled('div')(({theme}) => {
  return {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    '& .dot-icon': {
      height: 10,
      width: 10,
      minWidth: 10,
      borderRadius: '50%',
      marginRight: 14,
      marginTop: 3,
    },
    '& .schedule-cell-action': {
      color: theme.palette.text.secondary,
      marginLeft: 'auto',
    },
  };
});

const ScheduleCell = ({data}) => {
  return (
    <ScheduleCellWrapper className='item-hover'>
      <span style={{backgroundColor: data.color}} className='dot-icon' />
      <Typography variant='h5' component='h5'>
        {data.title}
      </Typography>
      <span className='schedule-cell-action'>{data.day}th</span>
    </ScheduleCellWrapper>
  );
};

ScheduleCell.propTypes = {
  data: PropTypes.object,
};

const Schedules = ({schedules}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      sxStyle={{height: 1}}
      title={messages['dashboard.eCommerce.schedules']}
      action={messages['dashboard.eCommerce.addNewSchedules']}
      contentStyle={{paddingTop: 8}}
    >
      <SchedulesRoot>
        <div className='schedules-item'>
          <DateSelector schedules={schedules} />
        </div>
        <div className='schedules-item'>
          <AppList
            data={schedules}
            renderRow={(data) => (
              <ScheduleCell key={'schedule-' + data.id} data={data} />
            )}
          />
        </div>
      </SchedulesRoot>
    </AppCard>
  );
};

export default Schedules;

Schedules.propTypes = {
  schedules: PropTypes.array,
};
