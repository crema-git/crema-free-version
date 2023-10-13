import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';

const EditButton = ({action, title}) => {
  return (
    <IconButton
      variant='contained'
      color='primary'
      onClick={action}
      size='large'
    >
      {title}
    </IconButton>
  );
};

export default EditButton;

EditButton.propTypes = {
  title: PropTypes.any.isRequired,
  action: PropTypes.func,
};
