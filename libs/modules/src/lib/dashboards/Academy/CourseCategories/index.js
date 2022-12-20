import React from 'react';
import AppCard from '@crema/components/AppCard';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import { Fonts } from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';
import CourseSlider from './CourseSlider';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CourseCategories = ({ course }) => {
  const { images, title, desc, lessons, xp } = course;
  return (
    <AppCard sxStyle={{ height: 1 }} contentStyle={{ padding: 0 }}>
      <CourseSlider>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index}>
              <img src={image.image} alt={image.title} />
            </Box>
          ))}
        </Slider>
      </CourseSlider>
      <Box
        sx={{
          px: 4,
          pt: 3,
        }}
      >
        <Box
          component="h5"
          sx={{
            mb: 1,
            fontSize: 16,
            fontWeight: Fonts.BOLD,
          }}
        >
          {title}
        </Box>
        <Box
          component="p"
          sx={{
            mb: 4,
            color: 'text.secondary',
          }}
        >
          {desc}
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              color: '#259BE0',
              backgroundColor: '#E7F4FC',
              padding: { xs: '3px 12px', xl: '3px 18px' },
              borderRadius: 30,
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              fontSize: 12,
              mr: 1,
              '& img': {
                mr: 1.25,
              },
            }}
          >
            <img
              src={'/assets/images/dashboard/academy/lessons.svg'}
              alt="lessons"
            />
            {lessons} Lessons
          </Box>
          <Box
            sx={{
              color: '#FCB267',
              backgroundColor: '#FFF5EB',
              padding: { xs: '3px 12px', xl: '3px 18px' },
              borderRadius: 30,
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              ml: 'auto',
              fontSize: 12,
              '& img': {
                mr: 1.25,
              },
            }}
          >
            <img src={'/assets/images/dashboard/academy/xp.svg'} alt="xp" />
            {xp} XP
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default CourseCategories;

CourseCategories.propTypes = {
  course: PropTypes.object,
};
