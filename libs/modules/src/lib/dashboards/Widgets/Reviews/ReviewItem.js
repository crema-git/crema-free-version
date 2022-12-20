import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';

const ReviewItem = ({ item }) => {
  return (
    <Box
      sx={{
        fontSize: 14,
        px: 5,
        py: 2,
      }}
      className="item-hover"
      key={item.id}
    >
      <Box
        sx={{
          mb: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating value={item.rating} readOnly />
        <Box
          component="span"
          sx={{
            ml: 'auto',
            color: 'text.secondary',
            fontWeight: Fonts.MEDIUM,
          }}
        >
          {item.time}
        </Box>
      </Box>
      <Box
        component="p"
        sx={{
          color: 'text.secondary',
          mb: 1,
        }}
      >
        {item.content}
      </Box>
      <Box
        component="span"
        sx={{
          color: 'primary.main',
          fontWeight: Fonts.MEDIUM,
        }}
      >
        - {item.by}
      </Box>
    </Box>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};
