import React from 'react';
import {Box} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';

const Labels = ({labels}) => {
  return (
    <Box
      sx={{
        m: 4,
        mx: -1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {labels.map((label) => {
        return (
          <Tooltip title={label.name} placement='top' key={label.id}>
            <Box
              sx={{
                height: {xs: 4, sm: 6},
                width: 32,
                mx: 1,
                borderRadius: 20,
                backgroundColor: label.color,
              }}
              key={label.id}
            />
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default Labels;

Labels.propTypes = {
  labels: PropTypes.array.isRequired,
};
