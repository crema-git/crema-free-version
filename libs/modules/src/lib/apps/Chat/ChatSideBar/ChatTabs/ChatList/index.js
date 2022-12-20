import React from 'react';
import ChatItem from './ChatItem';
import PropTypes from 'prop-types';
import AppList from '@crema/components/AppList';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import { useIntl } from 'react-intl';
import ChatListSkeleton from '@crema/components/ChatListSkeleton';

const ChatList = ({ chatListData, loading, setSelectedUser, selectedUser }) => {
  const { messages } = useIntl();
  return (
    <AppList
      containerStyle={{
        display: 'flex',
        flexDirection: 'column',
      }}
      data={chatListData}
      ListEmptyComponent={
        <ListEmptyResult
          content={messages['chatApp.noUserFound']}
          loading={loading}
          placeholder={<ChatListSkeleton />}
        />
      }
      renderRow={(item) => (
        <ChatItem
          key={'chat-item-' + item.id}
          item={item}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    />
  );
};

export default ChatList;

ChatList.propTypes = {
  chatListData: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  selectedUser: PropTypes.object,
  setSelectedUser: PropTypes.func,
};
