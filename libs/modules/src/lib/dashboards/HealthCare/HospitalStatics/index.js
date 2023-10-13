import React from 'react';
import AppCard from "@crema/components/AppCard";
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import {Fonts} from "@crema/constants";

const HospitalStatics = ({ data }) => {
  const { bgColor, icon, value, name } = data;

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      style={{ backgroundColor: bgColor }}
      className='card-hover'
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            mr: 4,
            alignSelf: 'flex-start',
          }}
        >
          <img src={icon} alt='icon' />
        </Box>
        <Box
          sx={{
            width: 'calc(100% - 70px)',
          }}
        >
          <Typography
            component='h5'
            variant='inherit'
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              width: '100%',
              fontSize: 16,
              color: 'inherit',
              fontWeight: Fonts.SEMI_BOLD,
            }}
          >
            {value}
          </Typography>
          <Box
            component='p'
            sx={{
              pt: 0.5,
              color: 'text.secondary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              width: '100%',
            }}
          >
            {name}
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default HospitalStatics;

HospitalStatics.propTypes = {
  data: PropTypes.object,
};
