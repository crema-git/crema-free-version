import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';

const SlideItem = ({ slide }) => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          maxHeight: { xs: 220, md: 320 },
          minHeight: { xs: 210, md: 310 },
          '& img': {
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <img src={slide.srcImg} alt={slide.title} />
        </Box>
      </Box>
      <Box
        sx={{
          py: 3,
          px: 4,
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontSize: 16,
            fontWeight: Fonts.SEMI_BOLD,
            mb: 3,
          }}
        >
          {slide.title}
        </Typography>
        <Typography>{slide.description}</Typography>
      </Box>
    </Box>
  );
};

export default SlideItem;

SlideItem.propTypes = {
  slide: PropTypes.object,
};
