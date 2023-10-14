import React from 'react';
import {Box} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';

const RatingCell = ({selected, data, onChange}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={() => onChange(data)}
      className='pointer'
    >
      <Checkbox
        checked={selected.some((item) => item === data)}
        color='primary'
        inputProps={{'aria-label': 'secondary checkbox'}}
      />
      {data}
      <StarIcon
        style={{fontSize: 16, marginRight: 5, marginLeft: 2, marginTop: 3}}
      />
      & above
    </Box>
  );
};

export default RatingCell;

RatingCell.propTypes = {
  data: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  selected: PropTypes.array,
  onChange: PropTypes.func,
};
