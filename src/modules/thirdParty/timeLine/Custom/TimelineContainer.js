import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@mui/material';

const TimelineContainer = ({children}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        margin: {xs: '20px 0', md: '40px 0'},
        width: '100%',
        minWidth: {'@media (max-width: 499px)': 400},
        paddingRight: {'@media (max-width: 499px)': 4},

        '&:after': {
          backgroundColor: '#d5d6d8',
          content: '""',
          position: 'absolute',
          left: {
            '@media (max-width: 499px)': 10,
            xs: 30,
            sm: 'calc(50% - 0.5px)',
          },
          width: '1px',
          height: '100%',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default TimelineContainer;

TimelineContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
