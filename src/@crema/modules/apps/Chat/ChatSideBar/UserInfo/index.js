import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import {green, orange, red} from '@mui/material/colors';
import PropTypes from 'prop-types';
import {Typography} from '@mui/material';
import IntlMessages from '@crema/helpers/IntlMessages';
import {Fonts} from '@crema/constants/AppEnums';

const UserInfo = ({user, showStatus}) => {
  const getUserAvatar = () => {
    const name = user.displayName || user.name;
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };

  if (!user) {
    return null;
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
      className='user-info'
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {user.photoURL || user.image ? (
          <Avatar
            sx={{
              height: 44,
              width: 44,
              fontSize: 24,
              backgroundColor: orange[500],
            }}
            src={user.photoURL || user.image}
          />
        ) : (
          <Avatar
            sx={{
              height: 44,
              width: 44,
              fontSize: 24,
              backgroundColor: orange[500],
            }}
          >
            {getUserAvatar()}
          </Avatar>
        )}
        {user.isGroup
          ? null
          : showStatus && (
              <Box
                sx={{
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  zIndex: 1,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  border: `2px solid white`,
                  backgroundColor:
                    user.status === 'online' ? green[600] : red[600],
                }}
              />
            )}
      </Box>
      <Box
        sx={{
          width: 'calc(100% - 60px)',
          ml: 3.5,
        }}
      >
        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          {user.displayName || user.name
            ? user.displayName || user.name
            : user.email}
        </Typography>
        <Typography
          sx={{
            color: (theme) => theme.palette.text.secondary,
            fontSize: 14,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {user.isGroup ? (
            <span className='pointer'>
              {user.members.length} <IntlMessages id='chatApp.participants' />{' '}
            </span>
          ) : (
            <span> {user.status ? user.status : 'Online'}</span>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
  showStatus: PropTypes.bool,
};
