import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {alpha} from '@mui/material';

const Priority = ({priority}) => {
  return (
    <Box
      component='span'
      px={3}
      py={1}
      color={priority.color}
      borderRadius={'30px'}
      fontSize={12}
      display='inline-block'
      bgcolor={alpha(priority.color, 0.1)}
    >
      {priority.name}
    </Box>
  );
};

export default Priority;

Priority.propTypes = {
  priority: PropTypes.object.isRequired,
};
