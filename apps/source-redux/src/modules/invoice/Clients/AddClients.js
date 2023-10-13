import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AddClient } from '@crema/modules/invoice';
import { onAddClient } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const AddClients = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSave = (client) => {
    dispatch(onAddClient(client));
    navigate('/invoice/clients');
  };

  return <AddClient onSave={onSave} />;
};

export default AddClients;
