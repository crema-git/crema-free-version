import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AddClient } from '@crema/modules/invoice';
import { isEmptyObject } from '@crema/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { onGetClientDetail, onUpdateClient } from '../../../toolkit/actions';

const EditClients = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedClient = useSelector(
    ({ invoiceApp }) => invoiceApp.selectedClient,
  );

  useEffect(() => {
    dispatch(onGetClientDetail(id));
  }, [dispatch, id]);

  const onSave = (client) => {
    dispatch(onUpdateClient(client));
    navigate('/invoice/clients');
  };
  return (
    !isEmptyObject(selectedClient) && (
      <AddClient selectedClient={selectedClient} onSave={onSave} />
    )
  );
};

export default EditClients;
