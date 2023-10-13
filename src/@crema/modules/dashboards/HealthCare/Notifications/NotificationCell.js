import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {Fonts} from '@crema/constants/AppEnums';

const NotificationCell = ({notification}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        padding: '12px 20px',
      }}
      className='item-hover'
    >
      <Box
        sx={{
          mr: 4,
          mt: 1.5,
          height: 10,
          minWidth: 10,
          borderRadius: '50%',
          backgroundColor: notification.color,
        }}
      />
      <Box sx={{fontSize: 14}}>
        <Box
          component='h5'
          sx={{
            fontWeight: Fonts.MEDIUM,
            mb: 0.5,
          }}
        >
          {notification.title}
        </Box>
        <Box
          component='span'
          sx={{
            color: 'text.secondary',
          }}
        >
          {notification.time}
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationCell;

NotificationCell.propTypes = {
  notification: PropTypes.object.isRequired,
};
