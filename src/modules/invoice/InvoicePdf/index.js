import React from 'react';
import InvoicePdf from '@crema/modules/invoice/InvoicePdf';
import {useGetDataApi} from '@crema/hooks/APIHooks';
import {useParams} from 'react-router-dom';
import {isEmptyObject} from '@crema/helpers/ApiHelper';

const InvoicePdfPage = () => {
  const {id} = useParams();

  const [{apiData: invoiceSettings}] = useGetDataApi(
    '/api/invoice/settings',
    {},
    {},
    true,
  );

  const [{apiData: clientsList}] = useGetDataApi(
    '/api/invoice/clients',
    {},
    {},
    true,
  );

  const [{apiData: selectedInv}] = useGetDataApi(
    '/api/invoice/detail',
    {},
    {id},
    true,
  );

  return (
    clientsList?.length > 0 &&
    !isEmptyObject(invoiceSettings) &&
    !isEmptyObject(selectedInv) && (
      <InvoicePdf
        selectedInv={selectedInv}
        clientsList={clientsList}
        invoiceSettings={invoiceSettings}
      />
    )
  );
};

export default InvoicePdfPage;
