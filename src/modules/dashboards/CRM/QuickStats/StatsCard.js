import React from 'react';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {Fonts} from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';

const StatsCard = (props) => {
  const {icon, data, heading} = props;

  return (
    <AppCard
      className='card-hover'
      sxStyle={{
        borderRadius: (theme) =>
          theme.components.MuiCard.styleOverrides.root.borderRadius / 4,
      }}
    >
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{fontSize: {xs: 36, md: 48}}}>
          <Avatar
            sx={{
              height: {xs: 50, md: 60},
              width: {xs: 50, md: 60},
              backgroundColor: 'transparent',
            }}
          >
            <img src={icon} alt='icon' />
          </Avatar>
        </Box>
        <Box
          sx={{
            ml: 4,
          }}
        >
          <Box
            component='h3'
            sx={{
              fontWeight: Fonts.MEDIUM,
              fontSize: 18,
            }}
          >
            {data.count}
          </Box>
          <Box
            component='p'
            sx={{
              color: 'text.secondary',
            }}
          >
            {heading}
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default StatsCard;

StatsCard.defaultProps = {
  data: {
    count: '',
  },
};

StatsCard.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  data: PropTypes.object,
  heading: PropTypes.any.isRequired,
};
