import React, { useEffect } from 'react';
import { AddInvoice } from '@crema/modules/invoice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetClientList,
  onGetInvoiceList,
  onGetInvoiceSettings,
  onAddInvoice,
} from '../../../toolkit/actions';

const AddInvoicePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const invoiceSettings = useSelector(
    ({ invoiceApp }) => invoiceApp.invoiceSettings,
  );
  const clientsList = useSelector(({ invoiceApp }) => invoiceApp.clientsList);
  const invoiceList = useSelector(({ invoiceApp }) => invoiceApp.invoiceList);

  useEffect(() => {
    dispatch(onGetInvoiceList());
    dispatch(onGetClientList());
    dispatch(onGetInvoiceSettings());
  }, [dispatch]);

  const onSave = (invoice) => {
    dispatch(onAddInvoice(invoice));

    navigate('/invoice/home');
  };

  return (
    clientsList &&
    invoiceList?.length && (
      <AddInvoice
        clientsList={clientsList}
        totalCount={invoiceList?.length || 0}
        invoiceSettings={invoiceSettings}
        onSave={onSave}
      />
    )
  );
};

export default AddInvoicePage;
