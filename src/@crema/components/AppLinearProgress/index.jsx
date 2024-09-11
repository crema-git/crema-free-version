import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

export function CustomLinearProgress({
  thickness = 5,
  pathColor = '#d6d6d6',
  activeColor = '#1a90ff',
  borderRadius = 10,
  ...rest
}) {
  return (
    <LinearProgress
      sx={{
        height: thickness,
        borderRadius: borderRadius,

        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: pathColor,
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: pathColor,
          backgroundColor: activeColor,
        },
      }}
      {...rest}
    />
  );
}

CustomLinearProgress.propTypes = {
  pathColor: PropTypes.string,
  activeColor: PropTypes.string,
  thickness: PropTypes.number,
  borderRadius: PropTypes.number,
};

const AppLinearProgress = ({
  thickness = 3,
  borderRadius = 10,
  pathColor = '#F5F6FA',
  activeColor = '#00905F',
  variant = 'determinate',
  ...rest
}) => {
  return (
    <CustomLinearProgress
      pathColor={pathColor}
      thickness={thickness}
      borderRadius={borderRadius}
      activeColor={activeColor}
      variant={variant}
      {...rest}
    />
  );
};

AppLinearProgress.propTypes = {
  thickness: PropTypes.number,
  borderRadius: PropTypes.number,
  pathColor: PropTypes.string,
  activeColor: PropTypes.string,
  variant: PropTypes.oneOf(['buffer', 'determinate', 'indeterminate', 'query']),
};

export default AppLinearProgress;
