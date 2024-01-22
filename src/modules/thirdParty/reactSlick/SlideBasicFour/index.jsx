import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import SlideItem from './SlideItem';
import MediaSlider from './MediaSlider';

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SlideBasicFour = ({ slideBasicFour }) => {
  return (
    <AppCard>
      <MediaSlider>
        <Slider {...settings}>
          {slideBasicFour.map((slide, index) => (
            <Box key={index}>
              <SlideItem slide={slide} />
            </Box>
          ))}
        </Slider>
      </MediaSlider>
    </AppCard>
  );
};

export default SlideBasicFour;

SlideBasicFour.propTypes = {
  slideBasicFour: PropTypes.array,
};
