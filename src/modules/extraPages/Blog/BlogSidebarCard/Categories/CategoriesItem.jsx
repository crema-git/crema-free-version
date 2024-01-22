import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';

const CategoriesItem = ({ categories }) => {
  return (
    <Box
      sx={{
        color: (theme) => theme.palette.text.secondary,
        py: 2.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography>{categories.title}</Typography>
      <Box
        sx={{
          fontWeight: Fonts.MEDIUM,
          ml: 2,
        }}
        component='span'
      >
        {categories.number}
      </Box>
    </Box>
  );
};

export default CategoriesItem;

CategoriesItem.propTypes = {
  categories: PropTypes.object,
};
