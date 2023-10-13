import React, { useEffect } from 'react';
import { InvoiceSettings } from '@crema/modules/invoice';
import { useDispatch, useSelector } from 'react-redux';
import { onGetInvoiceSettings, onUpdateSettings } from '../../../redux/actions';

const InvoiceSettingsPage = () => {
  const dispatch = useDispatch();
  const invoiceSettings = useSelector(
    ({ invoiceApp }) => invoiceApp.invoiceSettings,
  );

  useEffect(() => {
    dispatch(onGetInvoiceSettings());
  }, [dispatch]);

  const updateSettings = (key, newSettings) => {
    const settings = {
      ...invoiceSettings,
      [key]: newSettings,
    };

    dispatch(onUpdateSettings(settings));
  };

  return (
    <InvoiceSettings
      defaultSettings={invoiceSettings}
      onUpdateSettings={updateSettings}
    />
  );
};

export default InvoiceSettingsPage;
