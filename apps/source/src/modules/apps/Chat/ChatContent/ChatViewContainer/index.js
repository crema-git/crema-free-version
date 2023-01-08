import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import moment from 'moment';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppsHeader from '@crema/components/AppsHeader';
import AppsFooter from '@crema/components/AppsFooter';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import SimpleBarReact from 'simplebar-react';

import { styled } from '@mui/material/styles';
import { postDataApi, putDataApi, useGetDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { MessageType } from '@crema/fakedb/chat/connectionList';
import { Header, MessagesList, SendMessage } from '@crema/modules/apps/Chat';
import { useChatActionsContext } from '../../../context/ChatContextProvider';

const ScrollbarWrapper = styled(SimpleBarReact)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    height: `calc(100% - 132px)`,
  };
});
const ScrollChatNoMainWrapper = styled('div')(() => {
  return {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  };
});

const ChatViewContainer = ({ selectedUser, setSelectedUser }) => {
  const { setConnectionData } = useChatActionsContext();
  const [message, setMessage] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const infoViewActionsContext = useInfoViewActionsContext();
  const [selectedMessage, setSelectedMessage] = useState(null);
  const { user } = useAuthUser();

  let _scrollBarRef = useRef();
  const [{ apiData: userMessages }, { setQueryParams, setData }] =
    useGetDataApi('/api/chatApp/connection/messages', {}, {}, false);

  useEffect(() => {
    setQueryParams({ id: selectedUser?.channelId });
  }, [selectedUser?.channelId]);

  useEffect(() => {
    if (
      userMessages &&
      userMessages.messageData &&
      userMessages.messageData.length > 0
    ) {
      if (_scrollBarRef?.current) {
        const scrollEl = _scrollBarRef.current.getScrollElement();
        scrollEl.scrollTop = scrollEl.scrollHeight;
      }
    }
  }, [userMessages, _scrollBarRef]);

  const sendFileMessage = (fileMessage) => {
    const data = {
      ...fileMessage,
      sender: user.id,
      time: moment().format('llll'),
    };
    postDataApi('/api/chatApp/message', infoViewActionsContext, {
      channelId: selectedUser?.channelId,
      message: data,
    })
      .then((data) => {
        setData(data?.userMessages);
        setConnectionData(data?.connectionData);
        infoViewActionsContext.showMessage('Message Added Successfully!');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onSend = (message) => {
    const data = {
      ...selectedMessage,
      message,
      message_type: MessageType.TEXT,
      sender: user.id,
      time: moment().format('llll'),
    };

    if (isEdit) {
      data.edited = true;
      putDataApi('/api/chatApp/message', infoViewActionsContext, {
        channelId: selectedUser?.channelId,
        message: data,
      })
        .then((data) => {
          setData(data?.userMessages);
          setConnectionData(data?.connectionData);
          infoViewActionsContext.showMessage('Message Edited Successfully!');
          setMessage('');
          setIsEdit(false);
          setSelectedMessage(null);
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    } else {
      postDataApi('/api/chatApp/message', infoViewActionsContext, {
        channelId: selectedUser?.channelId,
        message: data,
      })
        .then((data) => {
          setMessage('');
          setData(data?.userMessages);
          setConnectionData(data?.connectionData);
          infoViewActionsContext.showMessage('Message Added Successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };

  const onClickEditMessage = (data) => {
    if (data.message_type === MessageType.TEXT) {
      setIsEdit(true);
      setMessage(data.message);
      setSelectedMessage(data);
    }
  };

  const deleteMessage = (messageId) => {
    postDataApi('/api/chatApp/delete/message', infoViewActionsContext, {
      channelId: selectedUser?.channelId,
      messageId,
    })
      .then((data) => {
        setData(data?.userMessages);
        setConnectionData(data?.connectionData);
        infoViewActionsContext.showMessage('Message Deleted Successfully!');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const deleteConversation = () => {
    postDataApi('/api/chatApp/delete/user/messages', infoViewActionsContext, {
      channelId: selectedUser?.channelId,
    })
      .then((data) => {
        setSelectedUser(undefined);
        setConnectionData(data);
        infoViewActionsContext.showMessage('Chat Deleted Successfully!');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <Box
      sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        '& .apps-header': {
          minHeight: 72,
        },
      }}
    >
      <AppsHeader>
        <Header
          selectedUser={selectedUser}
          deleteConversation={deleteConversation}
        />
      </AppsHeader>

      {userMessages && user ? (
        <ScrollbarWrapper ref={_scrollBarRef}>
          <MessagesList
            userMessages={userMessages}
            authUser={user}
            selectedUser={selectedUser}
            onClickEditMessage={onClickEditMessage}
            deleteMessage={deleteMessage}
          />
        </ScrollbarWrapper>
      ) : (
        <ScrollChatNoMainWrapper>
          <Box
            component='span'
            sx={{
              fontSize: 18,
              color: 'grey.500',
            }}
          >
            <IntlMessages id='chatApp.sayHi' /> {selectedUser.name}
          </Box>
        </ScrollChatNoMainWrapper>
      )}

      <AppsFooter>
        <SendMessage
          currentMessage={message}
          sendFileMessage={sendFileMessage}
          onSendMessage={onSend}
        />
      </AppsFooter>
    </Box>
  );
};

export default ChatViewContainer;

ChatViewContainer.defaultProps = {};

ChatViewContainer.propTypes = {
  selectedUser: PropTypes.object.isRequired,
  setConnectionData: PropTypes.func,
  setSelectedUser: PropTypes.func,
};
