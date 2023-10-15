import React from 'react';

import {CustomPicker} from 'react-color';
import {EditableInput, Hue} from 'react-color/lib/components/common';
import PropTypes from 'prop-types';
import {Box} from '@mui/material';

export const MyPicker = ({hex, hsl, onChange}) => {
  return (
    <Box
      sx={{
        boxShadow:
          'rgba(0, 0, 0, 0.01) 0px 2px 10px, rgba(0, 0, 0, 0.1) 0px 2px 5px',
        p: 4,
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          height: 10,
          position: 'relative',
          marginBottom: 10,
        }}
      >
        <Hue hsl={hsl} onChange={onChange} />
      </Box>

      <Box sx={{display: 'flex'}}>
        <EditableInput
          style={{
            input: {
              height: 38,
              border: `1px solid ${hex}`,
              paddingLeft: 10,
            },
          }}
          value={hex}
          onChange={onChange}
        />
        <Box
          sx={{
            width: 40,
            height: 38,
            background: hex,
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomPicker(MyPicker);

MyPicker.propTypes = {
  hex: PropTypes.any,
  hsl: PropTypes.any,
  onChange: PropTypes.func,
};
