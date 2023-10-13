import React from 'react';
import { InvoiceSettings } from '@crema/modules/invoice';
import { putDataApi, useGetDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context';

const InvoiceSettingsPage = () => {
  const [{ apiData }, { reCallAPI }] = useGetDataApi(
    '/api/invoice/settings',
    {},
    {},
    true,
  );
  const infoViewActionsContext = useInfoViewActionsContext();

  const onUpdateSettings = (key, newSettings) => {
    const settings = {
      ...apiData,
      [key]: newSettings,
    };

    putDataApi('/api/invoice/settings/update', infoViewActionsContext, settings)
      .then(() => {
        reCallAPI();
        infoViewActionsContext.showMessage('Settings Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <InvoiceSettings
      defaultSettings={apiData}
      onUpdateSettings={onUpdateSettings}
    />
  );
};

export default InvoiceSettingsPage;
