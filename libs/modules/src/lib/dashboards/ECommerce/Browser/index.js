import React from 'react';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import Box from '@mui/material/Box';
import { Fonts } from '@crema/constants/AppEnums';
import AppList from '@crema/components/AppList';
import PropTypes from 'prop-types';

const BrowserCell = ({ item }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: 2,
        px: 5,
      }}
      className="item-hover"
    >
      <Box
        sx={{
          mr: 3.5,
        }}
      >
        <img
          alt=""
          style={{ maxWidth: 40, display: 'block' }}
          src={item.icon}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
        }}
      >
        <Box
          component="h3"
          sx={{
            fontWeight: Fonts.MEDIUM,
            mb: 0.5,
            fontSize: 14,
          }}
        >
          {item.name}
        </Box>
        <Box
          component="p"
          sx={{
            color: 'text.secondary',
            fontSize: 14,
          }}
        >
          {item.value}
        </Box>
      </Box>
    </Box>
  );
};

BrowserCell.propTypes = {
  item: PropTypes.object,
};

const Browser = ({ browserData }) => {
  const { messages } = useIntl();
  return (
    <AppCard title={messages['eCommerce.browser']} contentStyle={{ px: 0 }}>
      <AppList
        data={browserData}
        renderRow={(item, index) => <BrowserCell item={item} key={index} />}
      />
    </AppCard>
  );
};

export default Browser;

Browser.propTypes = {
  browserData: PropTypes.array,
};
