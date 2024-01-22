import React from 'react';
import PropTypes from 'prop-types';
import ClientLogo from './ClientLogo';
import Box from '@mui/material/Box';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import { Fonts } from '@crema/constants/AppEnums';

const Clients = ({ client }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      titleStyle={{ fontWeight: Fonts.BOLD, fontSize: { xs: 18, md: 20 } }}
      title={messages['extraPages.client']}
    >
      <Box
        sx={{
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            mt: -0.25,
            mr: -0.25,
          }}
        >
          {client.map((client, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '50%', sm: '33.33%', md: '25%', lg: '20%' },
                borderRight: (theme) => `solid 1px ${theme.palette.divider}`,
                borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
              }}
            >
              <ClientLogo client={client} />
            </Box>
          ))}
        </Box>
      </Box>
    </AppCard>
  );
};

export default Clients;

Clients.propTypes = {
  client: PropTypes.array,
};
