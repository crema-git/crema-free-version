import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { ChatSideBar } from '@crema/modules/apps/Chat';
import { useGetDataApi } from '@crema/utility/APIHooks';
import AppsContainer from '@crema/components/AppsContainer';

import ChatContent from './ChatContent';

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(undefined);

  const [{ apiData: connectionList, loading }, { setData: setConnectionData }] =
    useGetDataApi('/api/chatApp/connections', []);

  const { messages } = useIntl();
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
      <ChatContent
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        setConnectionData={setConnectionData}
      />
    </AppsContainer>
  );
};

export default Chat;
