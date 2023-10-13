import React, {useState} from 'react';
import OrdersGraph from './OrdersGraph';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {Fonts} from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';
import AppSelect from '@crema/components/AppSelect';
import {useIntl} from 'react-intl';

const Orders = ({data}) => {
  const [graphData, setGraphData] = useState(data.graphData.dataTwo);
  const {messages} = useIntl();

  const handleWeekChange = (value) => {
    switch (value) {
      case messages['dashboard.thisWeek']:
        setGraphData(data.graphData.dataOne);
        break;
      case messages['dashboard.lastWeeks']:
        setGraphData(data.graphData.dataTwo);
        break;
      case messages['dashboard.lastMonth']:
        setGraphData(data.graphData.dataThree);
        break;
      default:
        setGraphData(data.graphData.dataOne);
    }
  };

  return (
    <AppCard
      sxStyle={{
        height: 1,
        backgroundColor: (theme) => theme.palette.primary.main,
        color: 'white',
        '& .MuiSelect-select, & .MuiSelect-icon': {
          color: '#FFFFFF',
        },
        '& .recharts-label': {
          fill: '#FFFFFF',
        },
      }}
      title={messages['common.orders']}
      titleStyle={{color: '#FFFFFF'}}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleWeekChange}
        />
      }
      footer={
        <Box
          sx={{
            textTransform: 'uppercase',
            width: 1,
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            fontWeight: Fonts.MEDIUM,
            justifyContent: 'space-between',
          }}
        >
          <Box
            component='p'
            sx={{
              color: '#FFFFFF88',
              fontSize: 14,
            }}
          >
            <IntlMessages id='common.revenue' />
            <Box
              component='span'
              sx={{
                ml: 2,
                color: 'primary.contrastText',
              }}
            >
              {data.revenue}
            </Box>
          </Box>
          <Box
            component='p'
            sx={{
              color: '#FFFFFF88',
              fontSize: 14,
            }}
          >
            <IntlMessages id='common.orders' />
            <Box
              component='span'
              sx={{
                ml: 2,
                color: 'primary.contrastText',
              }}
            >
              {data.orders}
            </Box>
          </Box>
        </Box>
      }
    >
      <OrdersGraph data={graphData} />
    </AppCard>
  );
};

export default Orders;

Orders.defaultProps = {
  data: {
    new: 0,
    returning: 0,
    graphData: {
      dataOne: [],
      dataTwo: [],
      dataThree: [],
    },
  },
};

Orders.propTypes = {
  data: PropTypes.object,
};
