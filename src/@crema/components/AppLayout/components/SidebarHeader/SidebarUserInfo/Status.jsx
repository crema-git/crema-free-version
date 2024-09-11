import React from 'react';
import { Box } from '@mui/material';

const Status = () => {
  return (
    <Box
      sx={(theme) => ({
        position: 'absolute',
        right: 4,
        bottom: 4,
        zIndex: 1,
        width: 15,
        height: 15,
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: theme.palette.success.main,
        border: `solid 2px ${theme.palette.text.primary}`,
      })}
    />
  );
};

export default Status;
