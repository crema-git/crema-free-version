import React from 'react';
import {Box} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

const ColorCell = ({selected, data, onChange}) => {
  return (
    <Box
      sx={{
        backgroundColor: data,
        borderRadius: 100,
        height: 40,
        width: 40,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      onClick={() => onChange(data)}
      className='pointer'
    >
      {selected.some((item) => item === data) ? (
        <IconButton
          style={{
            height: 40,
            width: 40,
          }}
        >
          <CheckIcon style={{color: 'white'}} />
        </IconButton>
      ) : null}
    </Box>
  );
};

export default ColorCell;

ColorCell.propTypes = {
  data: PropTypes.any,
  selected: PropTypes.array,
  onChange: PropTypes.func,
};
