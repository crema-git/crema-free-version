import React, { useEffect } from 'react';
import { ChatSideBar } from '@crema/modules/apps/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import AppsContainer from '@crema/components/AppsContainer';
import { getConnectionList, onSelectUser } from '../../../redux/actions';
import ChatContent from './ChatContent';

const Chat = () => {
  const selectedUser = useSelector(({ chatApp }) => chatApp.selectedUser);

  const dispatch = useDispatch();
  const connectionList = useSelector(({ chatApp }) => chatApp.connectionList);
  const { loading } = useSelector(({ common }) => common);

  useEffect(() => {
    dispatch(getConnectionList());
  }, [dispatch]);

  const { messages } = useIntl();

  const setSelectedUser = (item) => {
    dispatch(onSelectUser(item));
  };

  return (
    <AppsContainer
      title={messages['chatApp.chat'].toString()}
      sidebarContent={
        <ChatSideBar
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          connectionList={connectionList}
          loading={loading}
        />
      }
    >
      <ChatContent selectedUser={selectedUser} />
    </AppsContainer>
  );
};

export default Chat;
