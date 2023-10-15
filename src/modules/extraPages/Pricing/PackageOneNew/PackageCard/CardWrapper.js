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
        backgroundColor: (theme) => theme.palette.common.white,
        boxShadow:
          '0px 4.00784px 8.01569px -2.00392px rgba(16, 24, 40, 0.1), 0px 2.00392px 4.00784px -2.00392px rgba(16, 24, 40, 0.06)',
        position: 'relative',
        '& .popular': {
          position: 'absolute',
          right: -30,
          top: -50,
          zIndex: 0,
          display: 'flex',
          color: (theme) => theme.palette.primary.main,
          '& .popularText': {
            position: 'relative',
            top: -10,
            left: 5,
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            right: -50,
            bottom: -30,
            zIndex: -1,
            width: 200,
            height: 200,
            borderRadius: '50%',
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
