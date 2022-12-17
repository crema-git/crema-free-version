import React, {useState} from 'react';
import ChatSideBar from './ChatSideBar';
import ChatContent from './ChatContent';
import {useIntl} from 'react-intl';
import AppsContainer from '@crema/components/AppsContainer';
import {useGetDataApi} from '@crema/utility/APIHooks';

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(undefined);

  const [{apiData: connectionList, loading}, {setData: setConnectionData}] =
    useGetDataApi('/api/chatApp/connections', []);

  const {messages} = useIntl();
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
