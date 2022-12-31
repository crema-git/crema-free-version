import React, { useState } from 'react';
import VisitsGraph from './VisitsGraph';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import AppSelect from '@crema/components/AppSelect';
import AppCard from '@crema/components/AppCard';

const Visits = ({ data }) => {
  const [graphData, setGraphData] = useState(data.graphData.dataOne);

  const handleWeekChange = (value) => {
    switch (value) {
      case 'This Week':
        setGraphData(data.graphData.dataTwo);
        break;
      case 'Last Weeks':
        setGraphData(data.graphData.dataOne);
        break;
      case 'Last Month':
        setGraphData(data.graphData.dataThree);
        break;
      default:
        setGraphData(data.graphData.dataOne);
    }
  };

  const { messages } = useIntl();

  return (
    <AppCard
      title={messages['dashboard.visits']}
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
      sxStyle={{ height: 1 }}
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
            component="p"
            sx={{
              color: 'text.primary',
              fontSize: 14,
            }}
          >
            <IntlMessages id="common.new" />
            <Box
              component="span"
              sx={{
                ml: 2,
                color: 'primary.main',
              }}
            >
              {data.new}
            </Box>
          </Box>
          <Box
            component="p"
            sx={{
              color: 'text.primary',
              fontSize: 14,
            }}
          >
            <IntlMessages id="common.returning" />
            <Box
              component="span"
              sx={{
                ml: 2,
                color: 'primary.main',
              }}
            >
              {data.returning}
            </Box>
          </Box>
        </Box>
      }
    >
      <VisitsGraph data={graphData} />
    </AppCard>
  );
};

export default Visits;

Visits.defaultProps = {
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

Visits.propTypes = {
  data: PropTypes.object,
};
