import React from 'react';
import PropsTypes from 'prop-types';
import {Box} from '@mui/material';

const MediaSlider = ({children}) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        border: '1px solid #e8e5dd',
        borderRadius: 2.5,
        overflow: 'hidden',
        pb: 6,
        '& .slick-slider': {
          pb: 5,
        },
        '& .slick-slide img': {
          display: 'block',
          width: '100%',
        },
        '& .slick-dots': {
          bottom: 0,
          '& li': {
            width: 10,
            height: 10,
            '& button': {
              width: 10,
              height: 10,
              padding: 0,
            },
            '& button:before': {
              fontSize: 0,
              backgroundColor: 'primary.main',
              width: 10,
              height: 10,
              borderRadius: '50%',
            },
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default MediaSlider;

MediaSlider.propTypes = {
  children: PropsTypes.node,
};
