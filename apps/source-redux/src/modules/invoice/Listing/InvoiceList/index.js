import React, { useEffect, useState } from 'react';
import InvContentHeader from './InvContentHeader';
import AppsHeader from '@crema/components/AppsHeader';
import AppsContent from '@crema/components/AppsContent';
import { InvoiceTable } from '@crema/modules/invoice';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onGetInvoiceList, onUpdateInvoice } from '../../../../redux/actions';

const InvoiceList = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const loading = useSelector(({ common }) => common.loading);

  const [page, setPage] = useState(0);

  const invoiceList = useSelector(({ invoiceApp }) => invoiceApp.invoiceList);

  useEffect(() => {
    dispatch(onGetInvoiceList({ folder: params?.folder, page: page }));
  }, [dispatch, page, pathname]);

  const onPageChange = (event, value) => {
    setPage(value);
  };
  const [filterText, onSetFilterText] = useState('');

  const [checkedInvs, setCheckedInvs] = useState([]);

  const onChangeStatus = (invoice, status) => {
    dispatch(onUpdateInvoice({ ...invoice, folderValue: status }));
  };
  return (
    <>
      <AppsHeader>
        <InvContentHeader
          page={page}
          invoiceList={invoiceList || []}
          checkedInvs={checkedInvs}
          setCheckedInvs={setCheckedInvs}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          onPageChange={onPageChange}
        />
      </AppsHeader>
      <AppsContent>
        <InvoiceTable
          invoiceData={invoiceList || []}
          loading={loading}
          onChangeStatus={onChangeStatus}
        />
      </AppsContent>
    </>
  );
};

export default InvoiceList;
