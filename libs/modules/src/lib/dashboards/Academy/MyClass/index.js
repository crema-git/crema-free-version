import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import React from 'react';
import Box from '@mui/material/Box';
import { Fonts } from '@crema/constants/AppEnums';
import AppLinearProgress from '@crema/components/AppLinearProgress';
import { useIntl } from 'react-intl';

import { alpha } from '@mui/material';
import PropTypes from 'prop-types';

const ClassItem = ({ item }) => {
  return (
    <Box
      key={item.id}
      sx={{
        px: 5,
        py: 2,
        display: 'flex',
        alignItems: 'center',
      }}
      className="item-hover"
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          backgroundColor: '#470137',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1,
          padding: 1.5,
        }}
      >
        <img alt="" src={item.icon} />
      </Box>
      <Box
        sx={{
          flex: 1,
          ml: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'inline-block',
              fontWeight: Fonts.REGULAR,
              fontSize: 14,
              mr: 1,
            }}
            component="h3"
          >
            {item.name}
          </Box>
          <Box
            sx={{
              ml: 'auto',
              color: (theme) => alpha(theme.palette.primary.main, 0.5),
              fontWeight: Fonts.MEDIUM,
            }}
          >
            {item.percent}%
          </Box>
        </Box>
        <Box
          sx={{
            mt: 1,
          }}
        >
          <AppLinearProgress value={item.percent} activeColor="#0A8FDC" />
        </Box>
      </Box>
    </Box>
  );
};

ClassItem.propTypes = {
  item: PropTypes.object,
};

const MyClass = ({ classData }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['academy.myClass']}
      contentStyle={{ px: 0 }}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={classData}
        renderRow={(data, index) => <ClassItem key={index} item={data} />}
      />
    </AppCard>
  );
};

export default MyClass;

MyClass.propTypes = {
  classData: PropTypes.array,
};
