import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import SenderMessageItem from './SenderMessageItem';
import ReceiverMessageItem from './ReceiverMessageItem';
import AppList from '@crema/components/AppList';

const MessageList = ({
  userMessages,
  authUser,
  selectedUser,
  onClickEditMessage,
  deleteMessage,
}) => {
  return (
    <Box
      sx={{
        px: 5,
        py: 6,
      }}
    >
      <AppList
        animation='transition.slideUpIn'
        data={userMessages.messageData}
        renderRow={(item, index) => {
          if (item.sender === authUser.id) {
            return (
              <SenderMessageItem
                authUser={authUser}
                item={item}
                key={item.id}
                onClickEditMessage={onClickEditMessage}
                deleteMessage={deleteMessage}
                isPreviousSender={
                  index > 0 &&
                  item.sender === userMessages.messageData[index - 1].sender
                }
                isLast={
                  (index + 1 < userMessages.messageData.length &&
                    item.sender !==
                      userMessages.messageData[index + 1].sender) ||
                  index + 1 === userMessages.messageData.length
                }
              />
            );
          } else {
            return (
              <ReceiverMessageItem
                selectedUser={selectedUser}
                item={item}
                key={item.id}
                isPreviousSender={
                  index > 0 &&
                  item.sender === userMessages.messageData[index - 1].sender
                }
                isLast={
                  (index + 1 < userMessages.messageData.length &&
                    item.sender !==
                      userMessages.messageData[index + 1].sender) ||
                  index + 1 === userMessages.messageData.length
                }
              />
            );
          }
        }}
      />
    </Box>
  );
};

export default MessageList;

MessageList.defaultProps = {};

MessageList.propTypes = {
  userMessages: PropTypes.object.isRequired,
  authUser: PropTypes.object.isRequired,
  selectedUser: PropTypes.object.isRequired,
  onClickEditMessage: PropTypes.func,
  deleteMessage: PropTypes.func,
};
