import React from 'react';
import Box from '@mui/material/Box';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import clsx from 'clsx';
import { alpha } from '@mui/material';

const ContactItem = (props) => {
  const { item, selectedUser, setSelectedUser } = props;

  return (
    <ListItem
      sx={{
        display: 'flex',
        pl: 5,
        pr: 5,
        cursor: 'pointer',
        '&.active': {
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.07),
        },
      }}
      button
      className={clsx('item-hover', {
        active: selectedUser && selectedUser.id === item.id,
      })}
      onClick={() => setSelectedUser(item)}
    >
      <div>
        <ListItemAvatar
          sx={{
            minWidth: 0,
            position: 'relative',
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
            }}
            src={item.image}
          />
        </ListItemAvatar>
      </div>
      <Box
        sx={{
          fontSize: 14,
          pl: 3.5,
          width: 'calc(100% - 36px)',
        }}
      >
        <Box
          component="h5"
          sx={{
            display: 'block',
            mb: 0.5,
          }}
        >
          {item.name}
        </Box>
        <Box
          component="p"
          sx={{
            color: 'text.secondary',
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          @{item.username}
        </Box>
      </Box>
    </ListItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  item: PropTypes.object.isRequired,
  selectedUser: PropTypes.object,
  setSelectedUser: PropTypes.func,
};
