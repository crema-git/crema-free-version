import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import AppsContainer from '@crema/components/AppsContainer';

import ChatContent from './ChatContent';
import ChatContextProvider from '../context/ChatContextProvider';
import ChatSideBar from './ChatSideBar';

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(undefined);

  const { messages } = useIntl();
  return (
    <ChatContextProvider>
      <AppsContainer
        title={messages['chatApp.chat'].toString()}
        sidebarContent={
          <ChatSideBar
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        }
      >
        <ChatContent
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      </AppsContainer>
    </ChatContextProvider>
  );
};

export default Chat;
