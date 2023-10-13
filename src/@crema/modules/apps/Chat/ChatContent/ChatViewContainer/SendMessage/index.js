import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {useDropzone} from 'react-dropzone';
import {Box, darken, IconButton} from '@mui/material';
import TextField from '@mui/material/TextField';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {MessageType} from '@crema/mockapi/fakedb/apps/chat/connectionList';

import {styled} from '@mui/material/styles';
import {generateUniqueID} from '@crema/helpers/StringHelper';

const SendBtn = styled(IconButton)(({theme}) => {
  return {
    height: 40,
    width: 40,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover, &:focus': {
      backgroundColor: darken(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.contrastText,
    },
    '& .MuiSvgIcon-root': {
      fontSize: 20,
      marginLeft: 3,
    },
  };
});

const SendMessage = ({sendFileMessage, onSendMessage, currentMessage = ''}) => {
  const [message, setMessage] = useState(currentMessage);
  const {getRootProps, getInputProps} = useDropzone({
    multiple: true,
    onDrop: (acceptedFiles) => {
      sendFileMessage({
        message: '',
        message_type: MessageType.MEDIA,
        media: acceptedFiles.map((file) => {
          return {
            id: generateUniqueID(),
            url: URL.createObjectURL(file),
            mime_type: file.type,
            file_name: file.name,
            file_size: file.size,
          };
        }),
      });
    },
  });

  useEffect(() => {
    setMessage(currentMessage);
  }, [currentMessage]);

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onClickSendMessage();
    }
  };

  const onClickSendMessage = () => {
    if (message) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const {messages} = useIntl();

  return (
    <Box
      sx={{
        display: 'flex',
        py: 0.25,
      }}
    >
      {message === '' ? (
        <Box
          sx={{
            mr: 2,
          }}
        >
          <IconButton
            {...getRootProps({
              className: clsx('dropzone'),
            })}
            style={{height: 40, width: 40}}
            size='large'
          >
            <input {...getInputProps()} />
            <AttachFileIcon />
          </IconButton>
        </Box>
      ) : null}
      <TextField
        sx={{
          width: '100%',
          position: 'relative',
          transition: 'all 0.5s ease',
          '& .MuiOutlinedInput-root': {
            padding: '12px 14px',
          },
        }}
        multiline
        variant='outlined'
        placeholder={messages['chatApp.sendMessagePlaceholder']}
        value={message}
        onChange={(event) => {
          if (event.target.value !== '\n') setMessage(event.target.value);
        }}
        onKeyPress={onKeyPress}
      />
      <Box
        onClick={onClickSendMessage}
        sx={{
          ml: 2,
        }}
      >
        <SendBtn size='large'>
          <SendOutlinedIcon />
        </SendBtn>
      </Box>
    </Box>
  );
};

export default SendMessage;

SendMessage.defaultProps = {
  message: '',
};

SendMessage.propTypes = {
  sendFileMessage: PropTypes.func,
  onSendMessage: PropTypes.func,
  currentMessage: PropTypes.string,
  message: PropTypes.string,
  setMessage: PropTypes.func,
  SendMessage: PropTypes.func,
};
