import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useInfoViewActionsContext} from '@crema/context/AppContextProvider/InfoViewContextProvider';
import AddClient from '@crema/modules/invoice/Clients/AddClient';
import {postDataApi} from '@crema/hooks/APIHooks';

const AddClients = () => {
  const navigate = useNavigate();
  const infoViewActionsContext = useInfoViewActionsContext();

  const onSave = (client) => {
    postDataApi('/api/invoice/clients/add', infoViewActionsContext, {
      client,
    })
      .then(() => {
        infoViewActionsContext.showMessage(
          'New Client has been created successfully!',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    navigate('/invoice/clients');
  };

  return <AddClient onSave={onSave} />;
};

export default AddClients;
