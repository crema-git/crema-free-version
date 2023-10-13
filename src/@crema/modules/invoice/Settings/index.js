import IntlMessages from '@crema/helpers/IntlMessages';
import {Box, Tab, Tabs} from '@mui/material';
import React, {useState} from 'react';
import Invoicing from './Invoicing';
import General from './General';
import Accounting from './Accounting';
import AppCard from '@crema/components/AppCard';
import {putDataApi, useGetDataApi} from '@crema/hooks/APIHooks';
import {useInfoViewActionsContext} from '@crema/context/AppContextProvider/InfoViewContextProvider';

const InvoiceSettings = () => {
  const [{apiData}, {reCallAPI}] = useGetDataApi(
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

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };
  return (
    <AppCard title='Settings'>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          '& .crMuiTab': {
            textTransform: 'capitalize',
            p: 0,
          },
        }}
      >
        <Tab
          className='crMuiTab'
          label={<IntlMessages id='faq.general' />}
          {...a11yProps(0)}
        />
        <Tab
          className='crMuiTab'
          label={<IntlMessages id='invoice.invoicing' />}
          {...a11yProps(1)}
        />
        <Tab
          className='crMuiTab'
          label={<IntlMessages id='invoice.accounting' />}
          {...a11yProps(2)}
        />
      </Tabs>
      {apiData?.general && (
        <Box
          sx={{
            mt: 4,
          }}
        >
          {value === 0 && (
            <General
              settings={apiData?.general}
              onUpdateSettings={onUpdateSettings}
            />
          )}
          {value === 1 && (
            <Invoicing
              settings={apiData?.invoicing}
              onUpdateSettings={onUpdateSettings}
            />
          )}
          {value === 2 && (
            <Accounting
              settings={apiData?.accounting}
              onUpdateSettings={onUpdateSettings}
            />
          )}
        </Box>
      )}
    </AppCard>
  );
};

export default InvoiceSettings;
