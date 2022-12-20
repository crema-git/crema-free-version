import React from 'react';
import Box from '@mui/material/Box';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import { Fonts } from '@crema/constants/AppEnums';

const MessageItem = (props) => {
  const { item, listStyle } = props;

  return (
    <ListItem
      sx={{
        display: 'flex',
        padding: '0px 0px 4px',
        '&:last-of-type': {
          paddingBottom: 0,
        },
      }}
      className={`${listStyle}`}
    >
      <Box
        sx={{
          mr: 4,
        }}
      >
        <ListItemAvatar
          sx={{
            minWidth: 10,
          }}
        >
          <Avatar
            sx={{
              width: { xs: 40, xl: 60 },
              height: { xs: 40, xl: 60 },
            }}
            src={item.image}
          />
        </ListItemAvatar>
      </Box>
      <Box
        sx={{
          fontSize: { xs: 16, xl: 18 },
        }}
      >
        <Box
          component="span"
          sx={{
            fontWeight: Fonts.LIGHT,
            display: 'block',
            fontSize: { xs: 16, xl: 18 },
          }}
        >
          {item.name}
        </Box>
        <Box
          component="span"
          sx={{
            color: 'text.secondary',
            display: 'block',
          }}
        >
          {item.message}
        </Box>
      </Box>
    </ListItem>
  );
};

export default MessageItem;

MessageItem.propTypes = {
  item: PropTypes.object.isRequired,
  listStyle: PropTypes.object,
};
