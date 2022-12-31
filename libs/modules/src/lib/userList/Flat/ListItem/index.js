import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import UserSocialMediaInfo from './UserSocialMediaInfo';
import { Fonts } from '@crema/constants/AppEnums';

const ListItem = (props) => {
  const { user } = props;

  return (
    <Box
      sx={{
        mb: { xs: 6, xl: 8 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          position: 'relative',

          '&:hover': {
            '& $crUserFlat:before': {
              left: '-150px',
            },
          },
        }}
      >
        <Box
          sx={{
            mr: { sm: 5 },
            mb: 4,
            '.crUserImage': {
              width: { sx: '100%', sm: 130 },
              height: { sx: 180, sm: 130 },
            },
          }}
        >
          <img src={user.image} alt="user" className="crUserImage" />
        </Box>

        <Box
          sx={{
            pb: { xs: 5, xl: 8 },
            flex: 1,
            position: 'relative',
            borderBottom: 'solid 2px',
            borderBottomColor: 'grey.400',

            '&:before': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: '-2px',
              zIndex: 1,
              height: '2px',
              width: '162px',
              backgroundColor: (theme) => theme.palette.grey['400'],
              transition: 'all 0.5s ease',
            },
          }}
        >
          <Box
            sx={{ mb: 3, fontSize: 16, component: 'h3', color: 'text.primary' }}
          >
            <Box
              component="span"
              sx={{
                fontWeight: Fonts.BOLD,
                color: 'text.primary',
                mr: 1,
              }}
            >
              {user.name}
            </Box>
            <IntlMessages id="common.in" />
            <Box
              component="span"
              sx={{
                color: 'primary.main',
                fontWeight: Fonts.BOLD,
                ml: 1,
              }}
            >
              {user.topic}
            </Box>
          </Box>

          <Box
            sx={{
              pr: { lg: 6, xl: 16 },
            }}
          >
            <Box
              component="p"
              sx={{
                color: 'text.secondary',
                fontSize: 14,
                mb: 4,
              }}
            >
              {user.information}
            </Box>
          </Box>

          <UserSocialMediaInfo user={user} />
        </Box>
      </Box>
    </Box>
  );
};

export default ListItem;

ListItem.propTypes = {
  user: PropTypes.object.isRequired,
};
