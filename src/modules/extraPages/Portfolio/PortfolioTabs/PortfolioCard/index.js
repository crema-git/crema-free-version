import React from 'react';
import { Box, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineLink } from 'react-icons/ai';
import CardContent from '@mui/material/CardContent';
import CardWrapper from './CardMediaWrapper';
import { Fonts } from '@crema/constants/AppEnums';

const PortfolioCard = ({ portfolio, onViewPortfolioDetail }) => {
  return (
    <CardWrapper onClick={() => onViewPortfolioDetail(portfolio)}>
      <Box className='card-media-wrapper'>
        <CardMedia component='img' image={portfolio.srcImg} alt='Portfolio' />
        <Box className='card-media-content'>
          <Box className='icon'>
            <FiSearch />
          </Box>
          <Box className='icon'>
            <AiOutlineLink />
          </Box>
        </Box>
      </Box>
      <CardContent
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          component='h5'
          sx={{
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          {portfolio.title}
        </Typography>
        <Typography
          sx={{
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          {portfolio.subTitle}
        </Typography>
      </CardContent>
    </CardWrapper>
  );
};

export default PortfolioCard;

PortfolioCard.propTypes = {
  portfolio: PropTypes.object,
  onViewPortfolioDetail: PropTypes.func,
};
