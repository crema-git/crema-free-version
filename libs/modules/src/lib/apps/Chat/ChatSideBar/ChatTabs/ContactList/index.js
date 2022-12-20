import React from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import AppList from '@crema/components/AppList';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import ChatListSkeleton from '@crema/components/ChatListSkeleton';
import { useIntl } from 'react-intl';

const ContactList = ({
  connectionListData,
  loading,
  setSelectedUser,
  selectedUser,
}) => {
  const { messages } = useIntl();
  return (
    <AppList
      containerStyle={{
        display: 'flex',
        flexDirection: 'column',
      }}
      data={connectionListData}
      ListEmptyComponent={
        <ListEmptyResult
          content={messages['chatApp.noUserFound']}
          loading={loading}
          placeholder={<ChatListSkeleton />}
        />
      }
      renderRow={(item) => (
        <ContactItem
          listStyle="px-0"
          key={'connection-item-' + item.id}
          item={item}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    />
  );
};

export default ContactList;

ContactList.propTypes = {
  connectionListData: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  selectedUser: PropTypes.object,
  setSelectedUser: PropTypes.func,
};
