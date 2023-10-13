import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import {Fonts} from "@crema/constants";
import {Typography} from '@mui/material';

const AppointmentCell = ({appointment}) => {
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
          src={appointment.profile_pic}
        />
      </Box>
      <Box
        sx={{
          fontSize: 14,
        }}
      >
        <Box
          component='h5'
          sx={{
            fontWeight: Fonts.MEDIUM,
            mb: 0.5,
          }}
        >
          {appointment.name}
        </Box>
        <Box component='p' sx={{color: 'primary.main'}}>
          {appointment.speciality}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ml: 'auto',
        }}
      >
        <Box
          component='p'
          sx={{
            color: 'primary.main',
            my: 1,
            fontSize: 13,
            fontWeight: Fonts.BOLD,
          }}
        >
          {appointment.appointmentTime}
        </Box>
        <Typography>{appointment.appointmentDate}</Typography>
      </Box>
    </Box>
  );
};

export default AppointmentCell;

AppointmentCell.propTypes = {
  appointment: PropTypes.object.isRequired,
};
