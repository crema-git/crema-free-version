import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useInfoViewActionsContext } from '@crema/context';
import { AddClient } from '@crema/modules/invoice';
import { putDataApi, useGetDataApi } from '@crema/hooks/APIHooks';
import { isEmptyObject } from '@crema/helpers';

const EditClients = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const infoViewActionsContext = useInfoViewActionsContext();

  const [{ apiData: selectedClient }] = useGetDataApi(
    '/api/clients/detail',
    {},
    { id },
    true,
  );
  const onSave = (client) => {
    putDataApi('/api/invoice/clients/update', infoViewActionsContext, {
      client,
    })
      .then(() => {
        infoViewActionsContext.showMessage(
          'Client has been updated successfully!',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    navigate('/invoice/clients');
  };

  return (
    !isEmptyObject(selectedClient) && (
      <AddClient selectedClient={selectedClient} onSave={onSave} />
    )
  );
};

export default EditClients;
