import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import {Fonts} from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';
import SlideContentWrapper from './SlideContentWrapper';
import ImageCardSlideWrapper from './ImageCardSlideWrapper';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CityInfo = (props) => {
  const {cityData} = props;

  return (
    <AppCard sxStyle={{height: 1}} contentStyle={{p: 0, pb: '0 !important'}}>
      <ImageCardSlideWrapper>
        <Slider className='imageCardSlide' {...settings}>
          {cityData.map((city) => {
            return (
              <Box
                key={city.id}
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  fontSize: {xs: 20, xl: 24},
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    '& .imageSlideFull': {
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      zIndex: -1,
                      width: '100% !important',
                      height: '100% !important',
                      objectFit: 'cover !important',
                    },
                  }}
                >
                  <img
                    className='imageSlideFull'
                    src={city.image}
                    alt='building'
                  />
                </Box>
                <SlideContentWrapper>
                  <Box
                    component='h3'
                    sx={{
                      mb: 4,
                      fontWeight: Fonts.BOLD,
                      fontSize: 16,
                    }}
                  >
                    {city.name}
                  </Box>

                  <Box
                    sx={{
                      mt: 'auto',
                    }}
                  >
                    <Typography component='p'>{city.desc}</Typography>
                  </Box>
                </SlideContentWrapper>
              </Box>
            );
          })}
        </Slider>
      </ImageCardSlideWrapper>
    </AppCard>
  );
};

export default CityInfo;

CityInfo.defaultProps = {
  cityData: [],
};

CityInfo.propTypes = {
  cityData: PropTypes.array,
};
