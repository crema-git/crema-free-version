import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';

const StatsCardSecond = ({ icon, bgColor, text, value }) => {
  return (
    <AppCard
      sxStyle={{
        height: 1,
        textAlign: 'center',
      }}
    >
      <Avatar
        sx={{
          padding: 3,
          display: 'flex',
          mb: { xs: 4, xl: 6 },
          marginLeft: 'auto',
          marginRight: 'auto',
          height: { xs: 60 },
          width: { xs: 60 },
          backgroundColor: bgColor,
        }}
      >
        <img src={icon} alt="" />
      </Avatar>
      <Box
        component="h3"
        sx={{
          mb: 2,
          fontSize: 20,
          fontWeight: Fonts.MEDIUM,
        }}
      >
        {value}
      </Box>
      <Box
        component="p"
        sx={{
          mb: 2,
          color: 'text.secondary',
          fontSize: 14,
        }}
      >
        {text}
      </Box>
    </AppCard>
  );
};

export default StatsCardSecond;

StatsCardSecond.defaultProps = {
  bgColor: '',
  value: '',
};

StatsCardSecond.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.any.isRequired,
  value: PropTypes.string,
  icon: PropTypes.string,
};
