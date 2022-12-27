import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AppLngSwitcher from '@crema/components/AppLngSwitcher';
import Box from '@mui/material/Box';
import AppSearchBar from '@crema/components/AppSearchBar';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import PropsTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import AppMessages from '../../../AppMessages';
import AppNotifications from '../../../AppNotifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppTooltip from '../../../AppTooltip';
import { alpha } from '@mui/material/styles';
import AppLogo from '../../components/AppLogo';
import UserInfo from '../../components/UserInfo';
import HorizontalNav from '../../components/HorizontalNav';
import { useSidebarContext } from '@crema/context/SidebarContextProvider';

const AppHeader = ({ toggleNavCollapsed, routesConfig }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { sidebarMenuSelectedBgColor, sidebarMenuSelectedTextColor } =
    useSidebarContext();

  return (
    <AppBar
      color='inherit'
      sx={{
        boxShadow: 'none',
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        backgroundColor: 'background.paper',
        width: {
          xs: '100%',
        },
      }}
      className='app-bar'
    >
      <Toolbar
        sx={{
          boxSizing: 'border-box',
          minHeight: { xs: 56, sm: 70 },
          px: { xs: 0 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: { lg: 1140, xl: 1420 },
            mx: 'auto',
            px: 5,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Hidden lgUp>
            <IconButton
              sx={{
                marginRight: (theme) => theme.spacing(2),
                color: 'text.secondary',
              }}
              edge='start'
              className='menu-btn'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleNavCollapsed}
              size='large'
            >
              <MenuIcon
                sx={{
                  width: 35,
                  height: 35,
                }}
              />
            </IconButton>
          </Hidden>

          <Box
            sx={{
              mr: 2,
              '& .app-logo': {
                pl: 0,
              },
              '& .logo-text': {
                display: { xs: 'none', sm: 'block' },
              },
            }}
          >
            <AppLogo />
          </Box>
          <Hidden lgDown>
            <Box
              sx={{
                ml: 5,
                '& .navbarNav': {
                  display: 'flex',
                  padding: 0,
                  mx: { xs: -4, lg: -5 },
                  marginRight: -16,
                },
                '& .navItem': {
                  width: 'auto',
                  cursor: 'pointer',
                  px: { xs: 4, lg: 5 },
                  py: 1,
                  borderRadius: 1,
                  '&.active': {
                    color: sidebarMenuSelectedTextColor,
                    backgroundColor: alpha(sidebarMenuSelectedBgColor, 0.8),
                    '& .navLinkIcon': {
                      color: (theme) => theme.palette.secondary.main,
                    },
                  },
                },
                '& .navLinkIcon': {
                  mr: 2.5,
                  color: (theme) => theme.palette.common.white,
                  fontSize: 20,
                },
              }}
            >
              <HorizontalNav routesConfig={routesConfig} />
            </Box>
          </Hidden>

          <Box
            sx={{
              flexGrow: 1,
            }}
          />
          <Box
            sx={{
              minHeight: 40,
              position: 'relative',
              display: { xs: 'none', sm: 'block' },
              '& .searchRoot': {
                position: { xs: 'absolute', sm: 'relative' },
                right: { xs: 0, sm: 'auto' },
                top: { xs: 0, sm: 'auto' },
              },
            }}
          >
            <AppSearchBar iconPosition='right' placeholder='Search…' />
          </Box>
          <Box sx={{ ml: 4 }}>
            <AppLngSwitcher iconOnly={true} tooltipPosition='bottom' />
          </Box>

          <Box
            sx={{
              ml: 4,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Hidden smDown>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: -2,
                  marginRight: -2,
                }}
              >
                <Box
                  sx={{
                    px: 1.85,
                  }}
                >
                  <AppNotifications />
                </Box>
                <Box
                  sx={{
                    px: 1.85,
                  }}
                >
                  <AppMessages />
                </Box>
              </Box>
            </Hidden>

            <Box
              sx={{
                ml: { sm: 4 },
                mr: { xs: 4, sm: 0 },
                '& .user-info-view': {
                  p: 0,
                },
                '& .user-info': {
                  display: 'none',
                },
              }}
            >
              <UserInfo />
            </Box>

            <Hidden smUp>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: -2,
                  marginRight: -2,
                }}
              >
                <Box
                  sx={{
                    px: 1.85,
                  }}
                >
                  <AppTooltip title='More'>
                    <IconButton
                      sx={{
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        color: (theme) => theme.palette.text.secondary,
                        backgroundColor: (theme) =>
                          theme.palette.background.default,
                        border: 1,
                        borderColor: 'transparent',
                        '&:hover, &:focus': {
                          color: (theme) => theme.palette.text.primary,
                          backgroundColor: (theme) =>
                            alpha(theme.palette.background.default, 0.9),
                          borderColor: (theme) =>
                            alpha(theme.palette.text.secondary, 0.25),
                        },
                      }}
                      onClick={handleClick}
                      size='large'
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </AppTooltip>
                </Box>
              </Box>
            </Hidden>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <AppNotifications isMenu />
              </MenuItem>
              <MenuItem>
                <AppMessages isMenu />
              </MenuItem>
              <MenuItem>Setting</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default AppHeader;

AppHeader.propTypes = {
  toggleNavCollapsed: PropTypes.func,
  routesConfig: PropsTypes.array.isRequired,
};
