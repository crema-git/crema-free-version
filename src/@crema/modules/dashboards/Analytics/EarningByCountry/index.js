import React from 'react';
import AppCard from '@crema/components/AppCard';
import MapChart from '../../Widgets/CountryMap/MapChart';
import {Box} from '@mui/material';
import {Fonts} from '@crema/constants/AppEnums';
import AppSelect from '@crema/components/AppSelect';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';

const EarningByCountry = ({earningData}) => {
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };

  const {messages} = useIntl();
  return (
    <AppCard
      sxStyle={{height: 1}}
      title={messages['dashboard.analytics.earningByCountries']}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }
    >
      <Box
        sx={{
          height: 224,
          '& .map-chart': {
            width: '100%',
            height: '100%',
          },
        }}
      >
        <MapChart />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {earningData.map((data) => (
          <Box
            sx={{
              px: 4.5,
              mb: 2,
            }}
            key={data.id}
          >
            <Box
              component='p'
              sx={{
                mb: 1,
                fontWeight: Fonts.MEDIUM,
                fontSize: 20,
              }}
            >
              ${data.amount}
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                component='span'
                sx={{
                  height: {xs: 8, xl: 10},
                  width: {xs: 8, xl: 10},
                  borderRadius: '50%',
                  display: 'block',
                  backgroundColor: data.color,
                  p: 1,
                  mr: 2,
                }}
              />
              <Box
                component='p'
                sx={{
                  color: 'text.secondary',
                  fontSize: 14,
                  textTransform: 'capitalize',
                }}
              >
                {data.country}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </AppCard>
  );
};

export default EarningByCountry;

EarningByCountry.propTypes = {
  earningData: PropTypes.array,
};
