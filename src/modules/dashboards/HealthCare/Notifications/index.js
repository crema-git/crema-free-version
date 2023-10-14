import React from 'react';
import AppCard from '@crema/components/AppCard';
import {useIntl} from 'react-intl';
import AppScrollbar from '@crema/components/AppScrollbar';
import AppList from '@crema/components/AppList';
import NotificationCell from './NotificationCell';
import PropTypes from 'prop-types';

const Notifications = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      contentStyle={{paddingLeft: 0, paddingRight: 0}}
      title={messages['healthCare.notification']}
      action={messages['common.viewAll']}
    >
      <AppScrollbar style={{maxHeight: 280}}>
        <AppList
          data={data}
          renderRow={(notification) => (
            <NotificationCell
              key={notification.id}
              notification={notification}
            />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Notifications;

Notifications.propTypes = {
  data: PropTypes.array.isRequired,
};
