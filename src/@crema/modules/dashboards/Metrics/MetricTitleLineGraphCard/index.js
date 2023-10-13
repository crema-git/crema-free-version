import React from 'react';
import LineGraph from './LineGraph';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {Fonts} from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';

const MetricTitleLineGraphCard = ({
  title,
  titleColor,
  valueColor,
  differenceColor,
  bgColor,
  data,
  graphColor,
}) => {
  return (
    <AppCard sxStyle={{backgroundColor: bgColor}}>
      <Box
        component='h3'
        sx={{
          mb: 2,
          fontWeight: Fonts.BOLD,
          fontSize: 16,
          color: titleColor,
        }}
      >
        {title}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: {xs: 3, xl: 0},
        }}
      >
        <Box
          component='h2'
          sx={{
            mb: 0,
            mr: 3,
            color: valueColor,
            fontWeight: Fonts.MEDIUM,
            fontSize: {xs: 24, md: 30, xl: 36},
          }}
        >
          {data.value}
        </Box>

        <LineGraph data={data.graphData} graphColor={graphColor} />
      </Box>
      <Box
        component='p'
        sx={{
          fontSize: 14,
          color: differenceColor,
        }}
      >
        <Box
          sx={{
            mr: 1,
          }}
          component='span'
        >
          {data.difference}
        </Box>
        <Box
          sx={{
            mr: 1,
          }}
          component='span'
        >
          <IntlMessages id='dashboard.thisMonth' />
        </Box>
        <Box
          sx={{
            mr: 1,
          }}
          component='span'
        >
          {data.differencePercent}
        </Box>
      </Box>
    </AppCard>
  );
};

export default MetricTitleLineGraphCard;

MetricTitleLineGraphCard.defaultProps = {
  bgColor: '',
  titleColor: '',
  valueColor: '',
  data: {
    value: '',
    difference: '',
    differencePercent: '',
    graphData: [],
  },
  differenceColor: '',
  graphColor: '',
};

MetricTitleLineGraphCard.propTypes = {
  title: PropTypes.any.isRequired,
  bgColor: PropTypes.string,
  titleColor: PropTypes.string,
  valueColor: PropTypes.string,
  data: PropTypes.object,
  differenceColor: PropTypes.string,
  graphColor: PropTypes.string,
};
