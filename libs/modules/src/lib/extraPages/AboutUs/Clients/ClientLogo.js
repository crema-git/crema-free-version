import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@mui/material';

const ClientLogo = ({client}) => {
  return (
    <Box
      sx={{
        minHeight: 140,
        maxHeight: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <img src={client.srcImg} alt={client.name} />
    </Box>
  );
};

export default ClientLogo;

ClientLogo.propTypes = {
  client: PropTypes.object,
};
