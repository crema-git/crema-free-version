import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import AppList from '@crema/components/AppList';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import AppScrollbar from '@crema/components/AppScrollbar';
import MessageItem from '@crema/components/AppMessages/MessageItem';

const Messages = ({ data = [] }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['dashboard.messages']}
      contentStyle={{ px: 0 }}
      action={
        <CloseIcon
          sx={{
            cursor: 'pointer',
          }}
        />
      }
    >
      <AppScrollbar
        sx={{
          height: 263,
        }}
      >
        <AppList
          data={data}
          renderRow={(item) => {
            return <MessageItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Messages;

Messages.propTypes = {
  data: PropTypes.array,
};
