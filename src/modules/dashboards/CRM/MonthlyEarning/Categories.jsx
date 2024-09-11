import React from 'react';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItem from '@mui/material/ListItem';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';

const Categories = (props) => {
  const { category } = props;

  return (
    <ListItem
      sx={{
        p: 0,
        pb: 2,
      }}
    >
      <Box
        component="span"
        sx={{
          height: 12,
          width: 12,
          mr: 4,
          borderRadius: '50%',
          backgroundColor: category.colorName,
        }}
      />
      <ListItemText
        sx={{
          margin: 0,
          '&  > *': {
            display: 'block',
            fontSize: '14px !important',
          },
        }}
        primary={`${category.name}:`}
      />
      <ListItemSecondaryAction
        sx={{
          right: 0,
        }}
      >
        <Box
          component="span"
          sx={{
            fontSize: 14,
            fontWeight: Fonts.BOLD,
          }}
        >
          ${category.value}
        </Box>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Categories;

Categories.propTypes = {
  category: PropTypes.object.isRequired,
};
