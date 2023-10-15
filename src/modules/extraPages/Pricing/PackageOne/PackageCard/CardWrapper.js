import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@mui/material';

const CardWrapper = ({children, ...rest}) => {
  return (
    <Box
      sx={{
        px: 7.5,
        py: 5,
        borderRadius: (theme) => theme.cardRadius / 4,
        border: (theme) => `solid 1px ${theme.palette.divider}`,
        position: 'relative',
        overflow: 'hidden',
        '& .popular': {
          position: 'absolute',
          right: -30,
          top: -10,
          zIndex: 0,
          maxWidth: 120,
          display: 'flex',
          '&:before': {
            content: '""',
            position: 'absolute',
            right: -50,
            bottom: -30,
            zIndex: -1,
            width: 200,
            height: 200,
            borderRadius: '50%',
            backgroundColor: (theme) => theme.palette.background.default,
          },
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default CardWrapper;

CardWrapper.propTypes = {
  children: PropTypes.node,
};
