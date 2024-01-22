import React from 'react';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';

const ImageCardWrapper = ({ children }) => {
  return (
    <AppCard
      sxStyle={{
        height: 1,
        backgroundImage: `url(/assets/images/widgets/latestpost.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        color: 'white',
        position: 'relative',
        minHeight: 300,
        '&:before': {
          content: '""',
          position: 'absolute',
          left: '0',
          top: '0',
          zIndex: 1,
          width: '100%',
          height: '100%',
          display: 'block',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
        },
        '& > *': {
          position: 'relative',
          zIndex: 3,
        },
      }}
    >
      {children}
    </AppCard>
  );
};

export default ImageCardWrapper;

ImageCardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
