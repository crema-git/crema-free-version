import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, Avatar, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';

const Member = ({ member }) => {
  const [connect, setConnect] = useState(false);

  const onConnect = () => {
    setConnect(!connect);
  };

  const onDisconnect = () => {
    setConnect(!connect);
  };

  return (
    <AppCard
      title={member.title}
      sxStyle={{
        boxShadow: 'none',
        borderRadius: 1,
        border: (theme) => `solid 1px ${theme.palette.divider}`,
        height: '100%',
      }}
      titleStyle={{
        fontSize: 12,
        fontWeight: Fonts.SEMI_BOLD,
        color: (theme) => theme.palette.text.secondary,
      }}
    >
      {connect ? (
        <Box sx={{ mb: 2 }}>
          <Button
            sx={{
              boxShadow: 'none',
              fontSize: 12,
              fontWeight: Fonts.BOLD,
              pt: 1,
              pb: 1.5,
              px: 3,
            }}
            variant="outlined"
            onClick={onConnect}
          >
            Connect
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box sx={{ mr: 2.5 }}>
            <Avatar src={member.srcImg} alt={member.title} />
          </Box>
          <Box sx={{ width: 'calc(100% - 50px)' }}>
            <Typography
              sx={{
                fontWeight: Fonts.MEDIUM,
                mb: 2.5,
                width: '100%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {member.name ? member.name : null}
              {member.email ? member.email : null}
            </Typography>
            <Button
              sx={{
                boxShadow: 'none',
                backgroundColor: (theme) =>
                  alpha(theme.palette.secondary.main, 0.1),
                color: (theme) => theme.palette.secondary.main,
                fontSize: 12,
                fontWeight: Fonts.BOLD,
                pt: 1,
                pb: 1.5,
                px: 3,
                maxWidth: '100%',
                '&:hover, &:focus': {
                  backgroundColor: (theme) =>
                    alpha(theme.palette.secondary.main, 0.1),
                  color: (theme) => theme.palette.secondary.main,
                },
              }}
              onClick={onDisconnect}
            >
              <Box
                component="span"
                sx={{
                  width: '100%',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Disconnect
              </Box>
            </Button>
          </Box>
        </Box>
      )}
    </AppCard>
  );
};

export default Member;

Member.propTypes = {
  member: PropTypes.object,
};
