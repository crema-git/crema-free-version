import React from 'react';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { green, red } from '@mui/material/colors';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';

const CoinStats = (props) => {
  const { icon, bgColor, data, heading } = props;

  return (
    <AppCard
      sxStyle={{
        borderRadius: (theme) =>
          theme.components.MuiCard.styleOverrides.root.borderRadius / 4,
      }}
      className="card-hover"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            p: 3,
            fontSize: { xs: 30, md: 48 },
            height: { xs: 46, md: 50, xl: 60 },
            width: { xs: 46, md: 50, xl: 60 },
            backgroundColor: bgColor,
          }}
        >
          <img alt="" src={icon} />
        </Avatar>

        <Box
          sx={{
            position: 'relative',
            ml: 4,
          }}
        >
          <Box
            component="p"
            sx={{
              fontSize: 14,
              color: 'text.secondary',
              mb: 2,
            }}
          >
            {heading}
          </Box>
          <Box
            component="h3"
            sx={{
              display: 'inline-block',
              fontWeight: Fonts.MEDIUM,
              fontSize: 17,
              mr: 3,
            }}
          >
            ${data.price}
          </Box>
          <Box
            component="span"
            sx={{
              fontSize: 16,
              fontWeight: Fonts.MEDIUM,
              color: data.increment > 0.0 ? green[500] : red[500],
            }}
          >
            {data.increment}%
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default CoinStats;

CoinStats.defaultProps = {
  bgColor: '',
  data: {
    price: '',
    increment: null,
  },
};

CoinStats.propTypes = {
  icon: PropTypes.string,
  bgColor: PropTypes.string,
  data: PropTypes.object,
  heading: PropTypes.any.isRequired,
};
