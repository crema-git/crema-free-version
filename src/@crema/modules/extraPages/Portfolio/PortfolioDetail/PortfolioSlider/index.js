import React from 'react';
import MediaSlider from './MediaSlider';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const settings = {
  infinite: true,
  speed: 500,
  dots: false,
  centerMode: true,
  centerPadding: '160px',
  slidesToShow: 1,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1536,
      centerMode: true,
      centerPadding: '160px',
    },
    {
      breakpoint: 1200,
      centerMode: true,
      centerPadding: '100px',
    },
    {
      breakpoint: 960,
      centerPadding: '60px',
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PortfolioSlider = ({slide}) => {
  return (
    <MediaSlider>
      <Slider {...settings}>
        {slide.map((data, index) => (
          <Box
            key={index}
            sx={{
              '& img': {
                width: '100%',
              },
            }}
          >
            <img src={data.srcImg} alt='slide' />
          </Box>
        ))}
      </Slider>
    </MediaSlider>
  );
};

export default PortfolioSlider;

PortfolioSlider.propTypes = {
  slide: PropTypes.array,
};
