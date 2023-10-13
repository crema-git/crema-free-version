import AppGrid from '@crema/components/AppGrid';
import AppLoader from '@crema/components/AppLoader';
import {isEmptyObject} from '@crema/helpers/ApiHelper';
import {useGetDataApi} from '@crema/hooks/APIHooks';
import ClientItem from './ClientItem';
import {Box, Button} from '@mui/material';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const Clients = () => {
  const navigate = useNavigate();
  const [{apiData: clientsList, loading}] = useGetDataApi(
    '/api/invoice/clients',
    {},
    {},
    true,
  );

  return !isEmptyObject(clientsList) ? (
    <Box>
      <Box>
        <Button
          color='primary'
          variant='contained'
          sx={{display: 'block', ml: 'auto', mb: 3}}
          onClick={() => navigate('/invoice/client/add')}
        >
          Add Clients
        </Button>
      </Box>
      <AppGrid
        responsive={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
        }}
        loading={loading}
        data={clientsList}
        renderRow={(client) => <ClientItem client={client} />}
      />
    </Box>
  ) : (
    <AppLoader />
  );
};

export default Clients;
