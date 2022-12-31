import React from 'react';
import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import Box from '@mui/material/Box';
import { Fonts } from '@crema/constants/AppEnums';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

const NotificationItem = ({ notification }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        px: 5,
        py: 2,
      }}
      className="item-hover"
    >
      <Box
        sx={{
          mr: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          width: 50,
          textAlign: 'center',
          height: 50,
          backgroundColor: notification.bgcolor,
          color: notification.color,
          borderRadius: 1,
        }}
      >
        {notification.letter}
      </Box>
      <Box
        sx={{
          width: 'calc(100% - 66px)',
          overflow: 'hidden',
        }}
      >
        <Box
          component="h3"
          sx={{
            display: 'inline-block',
            fontWeight: Fonts.MEDIUM,
            mb: 0.5,
            fontSize: 14,
          }}
        >
          {notification.content}
        </Box>
        <Box
          component="p"
          sx={{
            fontSize: 14,
            color: 'text.secondary',
            mb: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {notification.date}
        </Box>
      </Box>
    </Box>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.object,
};

const Notifications = ({ notifications }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['academy.notifications']}
      contentStyle={{ px: 0 }}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={notifications}
        renderRow={(data, index) => (
          <NotificationItem key={index} notification={data} />
        )}
      />
    </AppCard>
  );
};

export default Notifications;

Notifications.propTypes = {
  notifications: PropTypes.array,
};
