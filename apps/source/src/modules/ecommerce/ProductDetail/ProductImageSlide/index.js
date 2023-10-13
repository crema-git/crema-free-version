import React, { useState } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Button, Checkbox } from '@mui/material';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { postDataApi } from '@crema/hooks/APIHooks';

const BrainHubSliderRoot = styled(Box)(({ theme }) => {
  return {
    position: 'relative',
    display: 'flex',
    '& .BrainhubCarousel__container': {
      marginLeft: 20,
      marginRight: 20,
      maxWidth: 300,
      [theme.breakpoints.up('sm')]: {
        maxWidth: 450,
      },
      '& .BrainhubCarousel': {
        height: '100%',
        maxHeight: 600,
        img: {
          width: '100%',
          height: '100%',
        },
      },
    },
    '& .BrainhubCarousel__dots': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
      '& .BrainhubCarousel__thumbnail': {
        opacity: 1,
        backgroundColor: 'transparent',
        borderRadius: 10,
        marginBottom: 10,
        border: '1px solid #A0A5B9',
        '&.BrainhubCarousel__thumbnail--selected': {
          border: `solid 2px #7c7c7c`,
        },
      },
      flexDirection: 'column',
      '& img': {
        height: 80,
      },
    },
  };
});

const ProductImageSlide = ({ product }) => {
  const [value, setValue] = useState(0);
  const infoViewActionsContext = useInfoViewActionsContext();
  const navigate = useNavigate();
  const slides = product.image.map((data) => (
    <img src={data.src} alt='' key={data.src} />
  ));
  const onChange = (value) => {
    setValue(value);
  };

  const onAddToCard = () => {
    postDataApi('/api/cart/add', infoViewActionsContext, {
      product,
    })
      .then(() => {
        infoViewActionsContext.showMessage(
          `${product.title} added to cart successfully`,
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };
  const onButNowToCard = () => {
    postDataApi('/api/cart/add', infoViewActionsContext, {
      product,
    })
      .then(() => {
        navigate('/ecommerce/cart');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <Grid item sm={12} md={4}>
      <BrainHubSliderRoot>
        <Dots
          position='left'
          thumbnails={slides}
          value={value}
          onChange={onChange}
          number={slides.length}
        />
        <Carousel
          position='left'
          value={value}
          slides={slides}
          onChange={onChange}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 2,
          }}
        >
          <Checkbox
            sx={{
              color: (theme) => theme.palette.warning.main,
              '&.Mui-checked': {
                color: (theme) => theme.palette.warning.main,
              },
            }}
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteOutlinedIcon />}
          />
        </Box>
      </BrainHubSliderRoot>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 5,
        }}
      >
        <Button
          variant='contained'
          color='primary'
          onClick={onAddToCard}
          style={{ marginRight: 20, width: 140 }}
        >
          Add to cart
        </Button>
        <Button
          style={{ width: 140 }}
          variant='contained'
          color='secondary'
          onClick={onButNowToCard}
        >
          Buy now
        </Button>
      </Box>
    </Grid>
  );
};

export default ProductImageSlide;

ProductImageSlide.propTypes = {
  product: PropTypes.object,
};
