import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabForm from './TabForm';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';

const BuySell = (props) => {
  const { buySell } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };
  const { messages } = useIntl();
  return (
    <AppCard sxStyle={{ height: 1 }} footer={messages['dashboard.buyNow']}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="simple tabs example"
        sx={{
          position: 'relative',
          mt: -2,
          ml: { xs: -2, xl: -5 },
          '& .muiTab': {
            fontSize: 16,
            textTransform: 'capitalize',
            padding: 0,
            mx: { xs: 2, xl: 5 },
            minWidth: 10,
            fontWeight: Fonts.BOLD,
          },
        }}
      >
        <Tab
          className="muiTab"
          label={<IntlMessages id="common.buy" />}
          {...a11yProps(0)}
        />
        <Tab
          className="muiTab"
          label={<IntlMessages id="common.sell" />}
          {...a11yProps(1)}
        />
      </Tabs>
      {value === 0 && <TabForm data={buySell.buyData} />}
      {value === 1 && <TabForm data={buySell.sellData} />}
    </AppCard>
  );
};

export default BuySell;

BuySell.defaultProps = {
  buySell: {
    buyData: {
      value: '',
      price: '',
      amount: '',
    },
    sellData: {
      value: '',
      price: '',
      amount: '',
    },
  },
};

BuySell.propTypes = {
  buySell: PropTypes.object,
};
