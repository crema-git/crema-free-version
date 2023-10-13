import React, { useEffect } from 'react';
import { InvoicePdf } from '@crema/modules/invoice';
import { useParams } from 'react-router-dom';
import { isEmptyObject } from '@crema/helpers';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetClientList,
  onGetInvoiceDetail,
  onGetInvoiceSettings,
} from '../../../redux/actions';

const InvoicePdfPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const invoiceSettings = useSelector(
    ({ invoiceApp }) => invoiceApp.invoiceSettings,
  );
  const clientsList = useSelector(({ invoiceApp }) => invoiceApp.clientsList);
  const selectedInvoice = useSelector(
    ({ invoiceApp }) => invoiceApp.selectedInvoice,
  );

  useEffect(() => {
    if (id) {
      dispatch(onGetClientList());
      dispatch(onGetInvoiceSettings());
      dispatch(onGetInvoiceDetail(id));
    }
  }, [dispatch, id]);

  return (
    clientsList?.length > 0 &&
    !isEmptyObject(invoiceSettings) &&
    !isEmptyObject(selectedInvoice) && (
      <InvoicePdf
        selectedInv={selectedInvoice}
        clientsList={clientsList}
        invoiceSettings={invoiceSettings}
      />
    )
  );
};

export default InvoicePdfPage;
