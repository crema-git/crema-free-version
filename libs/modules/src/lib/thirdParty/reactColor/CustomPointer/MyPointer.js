import React from 'react';
import IconButton from '@mui/material/IconButton';

export const MyPointer = () => {
  return (
    <IconButton
      sx={{
        width: 40,
        height: 40,
      }}
    >
      <i className='zmdi zmdi-colorize' />
    </IconButton>
  );
};

export default MyPointer;
