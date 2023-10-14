import React from 'react';
import {Box, Typography} from '@mui/material';
import PropTypes from 'prop-types';

const AudienceCell = ({audience}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 20px',
      }}
      className='item-hover'
    >
      <Box
        component='span'
        sx={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          marginRight: 2.5,
          marginTop: 0.75,
          backgroundColor: audience.color,
        }}
      />
      <Typography variant='h5' component='h5'>
        {audience.title}
      </Typography>
      <Box sx={{ml: 'auto'}} component='h4'>
        {audience.value}%
      </Box>
    </Box>
  );
};

export default AudienceCell;

AudienceCell.propTypes = {
  audience: PropTypes.object,
};
