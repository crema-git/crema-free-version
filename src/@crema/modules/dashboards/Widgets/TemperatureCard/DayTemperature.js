import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {Fonts} from '@crema/constants/AppEnums';

const DayTemperature = (props) => {
  const {day} = props;

  return (
    <Box
      sx={{
        px: 4,
        textAlign: 'center',
      }}
    >
      <Box
        component='span'
        sx={{
          mb: 3,
          display: 'block',
          fontWeight: Fonts.MEDIUM,
          fontSize: 14,
          textTransform: 'uppercase',
        }}
      >
        {day.day}
      </Box>
      <Box
        sx={{
          display: 'inline-block',
        }}
      >
        <img src={day.image} alt='weather' />
      </Box>
    </Box>
  );
};

export default DayTemperature;

DayTemperature.propTypes = {
  day: PropTypes.object.isRequired,
};
