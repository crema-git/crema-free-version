import React from 'react';
import { Box, alpha, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants';
import AppCircularProgress from '@crema/components/AppCircularProgress';

const MonthlyLimitItem = ({ monthlyLimit }) => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          mb: 1.5,
        }}
      >
        <AppCircularProgress
          pathColor={alpha(monthlyLimit.activeColor, 0.1)}
          value={monthlyLimit.value}
          activeColor={monthlyLimit.activeColor}
          thickness={3}
          minWidth={115}
          maxWidth={125}
          valueStyle={{
            color: (theme) => theme.palette.text.primary,
            fontWeight: Fonts.BOLD,
            fontSize: 24,
          }}
        />
      </Box>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: Fonts.BOLD,
          }}
        >
          {monthlyLimit.title}
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
          }}
        >
          {monthlyLimit.income}
        </Typography>
      </Box>
    </Box>
  );
};

export default MonthlyLimitItem;

MonthlyLimitItem.propTypes = {
  monthlyLimit: PropTypes.object.isRequired,
};
