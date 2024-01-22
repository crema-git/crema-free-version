import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import PortfolioCard from './PortfolioCard';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material';
import AppGrid from '@crema/components/AppGrid';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabs = [
  { id: 1, name: <IntlMessages id='common.all' /> },
  { id: 2, name: <IntlMessages id='extra.branding' /> },
  { id: 3, name: <IntlMessages id='extra.graphics' /> },
  { id: 4, name: <IntlMessages id='extra.logos' /> },
];

const PortfolioTabs = ({ portfolio }) => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const onTabsChange = (event, newValue) => {
    setValue(newValue);
  };

  const onViewPortfolioDetail = (data) => {
    navigate(`/extra-pages/portfolio/${data.id}`);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          backgroundImage: (theme) =>
            `linear-gradient(${alpha(
              theme.palette.common.white,
              0.05,
            )}, ${alpha(theme.palette.common.white, 0.05)})`,
          boxShadow: '0px 10px 10px 4px rgba(0, 0, 0, 0.04)',
          borderRadius: (theme) => theme.cardRadius / 4,
          mb: 7.5,
          px: 5,
          '& .MuiTab-root': {
            minHeight: { xs: 48, md: 60 },
            minWidth: 60,
            textTransform: 'capitalize',
            '&.Mui-selected': {
              color: (theme) => theme.palette.text.primary,
            },
          },
        }}
      >
        <Tabs
          value={value}
          onChange={onTabsChange}
          aria-label='basic tabs example'
        >
          {tabs.map((tab, index) => (
            <Tab label={tab.name} key={index} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {value === 0 && (
        <AppGrid
          data={portfolio.all}
          responsive={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
          }}
          renderRow={(data, index) => (
            <PortfolioCard
              key={index}
              onViewPortfolioDetail={onViewPortfolioDetail}
              portfolio={data}
            />
          )}
        />
      )}
      {value === 1 && (
        <AppGrid
          data={portfolio.branding}
          responsive={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
          }}
          renderRow={(data, index) => (
            <PortfolioCard
              key={index}
              onViewPortfolioDetail={onViewPortfolioDetail}
              portfolio={data}
            />
          )}
        />
      )}
      {value === 2 && (
        <AppGrid
          data={portfolio.graphics}
          responsive={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
          }}
          renderRow={(data, index) => (
            <PortfolioCard
              key={index}
              onViewPortfolioDetail={onViewPortfolioDetail}
              portfolio={data}
            />
          )}
        />
      )}
      {value === 3 && (
        <AppGrid
          data={portfolio.logos}
          responsive={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
          }}
          renderRow={(data, index) => (
            <PortfolioCard
              key={index}
              onViewPortfolioDetail={onViewPortfolioDetail}
              portfolio={data}
            />
          )}
        />
      )}
    </Box>
  );
};

export default PortfolioTabs;

PortfolioTabs.propTypes = {
  portfolio: PropTypes.object,
};
