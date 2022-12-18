import React from 'react';
import PropTypes from 'prop-types';

const AppImage = ({src, alt, ...props}) => {
  if (process.env.NX_APP_TYPE === 'ssr') {
    return (
      <picture>
        <img src={src} alt={alt} {...props} />
      </picture>
    );
  } else{
    return  <img src={src} alt={alt} {...props} />
  }
};

export default AppImage;
AppImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};
