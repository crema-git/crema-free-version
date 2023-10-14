import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';

import {alpha, styled} from '@mui/material/styles';
import {Fonts} from '@crema/constants/AppEnums';

const BadgeRoot = styled('div')(({theme}) => {
  return {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    color: theme.palette.primary.main,
    padding: '3px 10px',
    borderRadius: 30,
    fontSize: 12,
    fontWeight: Fonts.SEMI_BOLD,
    marginLeft: 8,
  };
});

const BestSellersCell = ({bestSeller}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 20px',
      }}
      className='item-hover'
    >
      <Avatar
        sx={{
          width: 44,
          height: 44,
          mr: 4,
        }}
        src={bestSeller.profile_pic}
      />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{mr: 3}}>
          <Box component='h5' sx={{mb: 0.5}}>
            {bestSeller.name}
          </Box>
          <Box
            component='p'
            sx={{
              color: 'text.secondary',
              fontSize: 14,
            }}
          >
            {bestSeller.weekDate}
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Rating
              sx={{
                fontSize: 18,
              }}
              readOnly
              name='product-rating'
              defaultValue={bestSeller.rating}
              precision={0.5}
            />
          </Box>
          <BadgeRoot>{bestSeller.sales}</BadgeRoot>
        </Box>
      </Box>
    </Box>
  );
};

export default BestSellersCell;

BestSellersCell.propTypes = {
  bestSeller: PropTypes.object.isRequired,
};
