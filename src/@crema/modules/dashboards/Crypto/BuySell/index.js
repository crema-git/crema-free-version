import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import IntlMessages from '@crema/helpers/IntlMessages';
import ExchangeForm from './ExchangeForm';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{width: '100%', px: 5, py: 6}}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabs = [
  {id: 1, name: <IntlMessages id='common.buy' />},
  {id: 2, name: <IntlMessages id='common.sell' />},
];

const BuySell = ({buySell}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppCard
      contentStyle={{
        p: 0,
        '&:last-child': {
          pb: 0,
        },
      }}
    >
      <Box sx={{width: '100%'}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs
            sx={{
              position: 'relative',
              minHeight: 52,
              '& .MuiTab-root': {
                '&:not(:first-of-type)': {
                  borderLeft: (theme) => `solid 1px ${theme.palette.divider}`,
                },
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            {tabs.map((tab, index) => (
              <Tab
                sx={{
                  width: '50%',
                  textTransform: 'capitalize',
                  py: 2,
                  px: 2,
                  minHeight: 52,
                }}
                label={tab.name}
                key={index}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ExchangeForm coinList={buySell.coinList} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ExchangeForm coinList={buySell.coinList} type='sell' />
        </TabPanel>
      </Box>
    </AppCard>
  );
};

export default BuySell;

BuySell.propTypes = {
  buySell: PropTypes.object,
};
