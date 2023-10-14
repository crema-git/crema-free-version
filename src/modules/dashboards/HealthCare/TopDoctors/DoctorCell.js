import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import {Button} from '@mui/material';
import {Fonts} from '@crema/constants/AppEnums';

const DoctorCell = ({doctor}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 20px',
      }}
      className='item-hover'
    >
      <Box sx={{mr: 4}}>
        <Avatar
          sx={{
            width: 48,
            height: 48,
          }}
          src={doctor.profile_pic}
        />
      </Box>
      <Box
        sx={{
          fontSize: 14,
        }}
      >
        <Box
          sx={{
            fontWeight: Fonts.MEDIUM,
            mb: 0.5,
          }}
          component='h5'
        >
          {doctor.name}
        </Box>
        <Box
          sx={{
            color: 'text.secondary',
          }}
          component='p'
        >
          {doctor.speciality}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          ml: 'auto',
          '@media only screen and (min-width: 1200px) and (max-width: 1399px)':
            {
              display: 'none',
            },
        }}
      >
        {doctor.scheduled ? (
          <Button color='secondary' variant='outlined'>
            Remove
          </Button>
        ) : (
          <Button color='primary' variant='outlined'>
            Schedule
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DoctorCell;

DoctorCell.propTypes = {
  doctor: PropTypes.object.isRequired,
};
