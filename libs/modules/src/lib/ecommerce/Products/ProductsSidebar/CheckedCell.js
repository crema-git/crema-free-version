import React from 'react';
import {Box} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';

const CheckedCell = ({selected, data, onChange}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={() => onChange(data.id)}
    >
      <Checkbox
        checked={selected.some((item) => item === data.id)}
        color='primary'
        inputProps={{'aria-label': 'secondary checkbox'}}
      />
      <Box>{data.name}</Box>
    </Box>
  );
};

export default CheckedCell;

CheckedCell.propTypes = {
  data: PropTypes.object,
  selected: PropTypes.array,
  onChange: PropTypes.func,
};
