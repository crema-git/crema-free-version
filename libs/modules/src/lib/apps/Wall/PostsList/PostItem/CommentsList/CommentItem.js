import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { MessageType } from '@crema/fakedb/chat/connectionList';

const CommentItem = ({ item }) => {
  const { author, message_type, media, comment, liked } = item;
  const [isLiked, setIsLiked] = useState(liked);

  const toggleLikeStatus = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Box
      sx={{
        '&:not(:last-of-type)': {
          marginBottom: 5,
        },
      }}
    >
      <Box display="flex">
        <Avatar
          sx={{
            width: 44,
            height: 44,
          }}
          src={author.profilePic}
        />
        <Box ml={3.5}>
          {message_type === MessageType.TEXT ? (
            <Box
              sx={{
                padding: '10px 20px',
                border: (theme) => `solid 1px ${theme.palette.divider}`,
                borderRadius: 10,
                borderBottomLeftRadius: 0,
              }}
            >
              <Typography>{comment}</Typography>
            </Box>
          ) : (
            <Box
              sx={{
                padding: '10px 20px',
                border: (theme) => `solid 1px ${theme.palette.divider}`,
                borderRadius: 10,
                borderBottomLeftRadius: 0,
                '& img': {
                  maxHeight: 100,
                },
              }}
            >
              <img src={media.url} alt="comment-img" />
            </Box>
          )}
          <Box display="flex" alignItems="center" mt={1}>
            <Box
              className="pointer"
              color={isLiked && 'primary.main'}
              onClick={toggleLikeStatus}
            >
              Like
            </Box>
            <Box ml={4} className="pointer">
              Reply
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentItem;

CommentItem.propTypes = {
  item: PropTypes.object,
};
