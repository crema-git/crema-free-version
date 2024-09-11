import React from 'react';
import PropTypes from 'prop-types';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import Box from '@mui/material/Box';
import AppTooltip from '@crema/components/AppTooltip';

const Labels = ({ labels }) => {
  return (
    <Box
      className="labelIcon"
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {labels.map((label) => {
        return (
          <AppTooltip title={label.name} placement="top" key={label.id}>
            <LabelOutlinedIcon
              sx={{
                color: `${label.color}`,
                marginRight: 2.5,
                display: 'block',
              }}
            />
          </AppTooltip>
        );
      })}
    </Box>
  );
};

export default Labels;

Labels.propTypes = {
  labels: PropTypes.array.isRequired,
};
