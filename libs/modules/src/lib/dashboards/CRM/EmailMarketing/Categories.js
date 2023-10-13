import React from 'react';
import ListItem from '@mui/material/ListItem';
import PropTypes from 'prop-types';
import ListItemText from '@mui/material/ListItemText';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import {Fonts} from "@crema/constants";

const Categories = (props) => {
  const {category} = props;

  return (
    <ListItem
      sx={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 'auto',
        padding: '0 10px 10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 0.5,
        }}
      >
        <Box
          component='span'
          sx={{
            backgroundColor: category.fill,
            width: 10,
            height: 10,
            borderRadius: '50%',
            mr: 2,
            display: 'block',
            mt: 0.5,
          }}
        />
        <Typography
          component='h6'
          variant='h6'
          sx={{
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            lineHeight: 1,
          }}
        >
          {category.value}
        </Typography>
      </Box>
      <ListItemText
        sx={{
          color: (theme) => theme.palette.text.secondary,
          margin: 0,
          ml: 4.5,
          '& > .MuiTypography-root': {
            fontSize: '14px !important',
          },
        }}
        primary={category.name}
      />
    </ListItem>
  );
};

export default Categories;

Categories.propTypes = {
  category: PropTypes.object.isRequired,
};
