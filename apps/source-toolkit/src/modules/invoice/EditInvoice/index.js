import React, { useEffect } from 'react';
import { AddInvoice } from '@crema/modules/invoice';
import { useNavigate, useParams } from 'react-router-dom';
import {
  onGetClientList,
  onGetInvoiceList,
  onGetInvoiceSettings,
  onGetInvoiceDetail,
  onUpdateInvoice,
} from '../../../toolkit/actions';
import { useDispatch, useSelector } from 'react-redux';
import AppLoader from '@crema/components/AppLoader';

const EditInvoicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const invoiceSettings = useSelector(
    ({ invoiceApp }) => invoiceApp.invoiceSettings,
  );
  const clientsList = useSelector(({ invoiceApp }) => invoiceApp.clientsList);
  const invoiceList = useSelector(({ invoiceApp }) => invoiceApp.invoiceList);
  const selectedInvoice = useSelector(
    ({ invoiceApp }) => invoiceApp.selectedInvoice,
  );
  const loading = useSelector(({ common }) => common.loading);

  useEffect(() => {
    dispatch(onGetInvoiceList());
    dispatch(onGetClientList());
    dispatch(onGetInvoiceSettings());
    if (id) onGetInvoiceDetail(id);
  }, [dispatch, id]);

  const onSave = (invoice) => {
    dispatch(onUpdateInvoice(invoice));

    navigate('/invoice/home');
  };

  return loading ? (
    <AppLoader />
  ) : (
    clientsList && invoiceList?.length && (
      <AddInvoice
        selectedInv={selectedInvoice}
        clientsList={clientsList}
        totalCount={invoiceList?.length || 0}
        invoiceSettings={invoiceSettings}
        onSave={onSave}
      />
    )
  );
};

export default EditInvoicePage;
