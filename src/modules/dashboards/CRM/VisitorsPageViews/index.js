import React from 'react';
import PropTypes from 'prop-types';
import StatGraphs from './StatGraphs';
import { useIntl } from 'react-intl';
import { alpha, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppCard from '@crema/components/AppCard';
import AppSelect from '@crema/components/AppSelect';

const VisitorCard = styled(AppCard)(({ theme }) => {
  return {
    height: '100%',
    '& .MuiCardHeader-root': {
      [theme.breakpoints.down('sm')]: {
        alignItems: 'flex-start',
      },
    },
  };
});
const VisitorAction = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    '& .visitor-action-view': {
      display: 'none',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginRight: 10,
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
    '& .visitor-action-item': {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      lineHeight: 1,
      paddingBottom: 2,
      '&:not(:first-of-type)': {
        borderLeft: `solid 1px ${alpha(theme.palette.text.secondary, 0.2)}`,
        marginLeft: 16,
        paddingLeft: 16,
      },
    },
    '& .dot-visitor': {
      height: 10,
      width: 10,
      marginRight: 4,
      borderRadius: '50%',
    },
  };
});

const VisitorsPageViews = ({ data }) => {
  const theme = useTheme();
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  const { messages } = useIntl();

  return (
    <VisitorCard
      title={messages['dashboard.crm.visitorsPageViews']}
      action={
        <VisitorAction>
          <div className='visitor-action-view'>
            <div className='visitor-action-item'>
              <span
                className='dot-visitor'
                style={{ backgroundColor: theme.palette.primary.main }}
              />
              {messages['dashboard.crm.pagesViews']}
            </div>
            <div className='visitor-action-item'>
              <span
                className='dot-visitor'
                style={{ backgroundColor: theme.palette.secondary.main }}
              />
              {messages['dashboard.crm.visitors']}
            </div>
          </div>
          <AppSelect
            menus={[
              messages['dashboard.thisWeek'],
              messages['dashboard.lastWeeks'],
              messages['dashboard.lastMonth'],
            ]}
            defaultValue={messages['dashboard.thisWeek']}
            onChange={handleSelectionType}
          />
        </VisitorAction>
      }
    >
      <StatGraphs data={data} />
    </VisitorCard>
  );
};
export default VisitorsPageViews;

VisitorsPageViews.defaultProps = {
  data: [],
};

VisitorsPageViews.propTypes = {
  data: PropTypes.array,
};
