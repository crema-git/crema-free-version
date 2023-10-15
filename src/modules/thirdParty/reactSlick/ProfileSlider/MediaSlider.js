import React from 'react';
import PropsTypes from 'prop-types';
import {Box} from '@mui/material';

const MediaSlider = ({children}) => {
  return (
    <Box
      sx={{
        maxWidth: 320,
        mx: 'auto',
        border: (theme) => `solid 1px ${theme.palette.divider}`,
        borderRadius: 2.5,
        py: 10,
        '& .slick-slider': {
          pb: 5,
        },
        '& .slick-slide img': {
          display: 'inline-block',
        },
        '& .slick-dots': {
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
