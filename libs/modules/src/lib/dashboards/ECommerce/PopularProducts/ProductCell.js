import React from 'react';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import {Fonts} from "@crema/constants";

const ProductCell = ({data}) => {
  return (
    <Box
      sx={{
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
      }}
      key={data.id}
      className='item-hover'
    >
      <Avatar
        variant='rounded'
        alt=''
        src={data.icon}
        sx={{
          height: 60,
          width: 60,
          mr: 4,
        }}
      />

      <Box sx={{flex: 1}}>
        <Typography
          sx={{
            color: (theme) => theme.palette.primary.main,
            mb: 0.5,
          }}
          component='h5'
          variant='h5'
        >
          {data.name}
        </Typography>
        <Typography
          sx={{
            fontWeight: Fonts.MEDIUM,
            '& span': {
              display: 'inline-block',
            },
          }}
        >
          <span>${data.price}</span>
          <Box
            component='span'
            sx={{
              ml: 3,
              color: (theme) => theme.palette.text.secondary,
              textDecoration: 'line-through',
            }}
          >
            ${data.mrp}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCell;

ProductCell.propTypes = {
  data: PropTypes.object,
};
