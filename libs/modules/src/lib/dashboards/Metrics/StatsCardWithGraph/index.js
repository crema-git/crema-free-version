import React from 'react';
import IncomeGraph from './IncomeGraph';
import WebTrafficGraph from './WebTrafficGraph';
import RevenueGrowthGraph from './RevenueGrowthGraph';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';

const StatsCardWithGraph = ({
  data,
  text,
  bgColor,
  headingColor,
  valueColor,
  type,
}) => {
  const onGetGraph = () => {
    switch (type) {
      case 'incomeGraph':
        return <IncomeGraph data={data.graphData} />;

      case 'trafficGraph':
        return <WebTrafficGraph data={data.graphData} />;

      case 'revenueGrowth':
        return <RevenueGrowthGraph data={data.graphData} />;

      default:
        return <IncomeGraph data={data.graphData} />;
    }
  };

  return (
    <AppCard
      sxStyle={{
        backgroundColor: bgColor,
        height: 1,
      }}
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <Box
            component="p"
            sx={{
              color: headingColor,
              fontSize: 16,
              fontWeight: Fonts.BOLD,
              mb: { xs: 4, md: 6 },
            }}
          >
            {text}
          </Box>
          <Box
            component="h3"
            sx={{
              color: valueColor,
              fontSize: 20,
              fontWeight: Fonts.MEDIUM,
            }}
          >
            {data.value}
          </Box>
        </Box>
        <Box
          sx={{
            pl: -10,
            mr: -8,
            mb: -10,
          }}
        >
          {onGetGraph()}
        </Box>
      </Box>
    </AppCard>
  );
};

export default StatsCardWithGraph;

StatsCardWithGraph.defaultProps = {
  bgColor: '',
  data: {
    value: '',
    graphData: [],
  },
  type: '',
  headingColor: '',
  valueColor: '',
};

StatsCardWithGraph.propTypes = {
  text: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  data: PropTypes.object,
  type: PropTypes.string,
  headingColor: PropTypes.string,
  valueColor: PropTypes.string,
};
