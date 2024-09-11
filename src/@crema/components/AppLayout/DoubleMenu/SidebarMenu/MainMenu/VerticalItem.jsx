import React, { useMemo } from 'react';
import { Icon, ListItemButton, ListItemText } from '@mui/material';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import AppBadge from '../../../../AppBadge';
import AppNavLink from '../../../../AppNavLink';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import useStyles from './VerticalItem.style';
import { checkPermission } from '@crema/helpers/RouteHelper';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';
import { useAuthUser } from '@crema/hooks/AuthHooks';

const VerticalItem = ({ level, item }) => {
  const { themeMode } = useThemeContext();
  const classes = useStyles({ level, themeMode });
  const { user } = useAuthUser();
  const hasPermission = useMemo(() => checkPermission(item.auth, user.role), [item.auth, user.role]);
  if (!hasPermission) {
    return null;
  }
  return (
    <ListItemButton
      component={AppNavLink}
      to={item.url}
      activeClassName="active"
      className={clsx(classes.navItem, 'nav-item')}
      exact={item.exact}
    >
      {item.icon && (
        <Box component="span" mr={4}>
          <Icon className={clsx(classes.listIcon, 'nav-item-icon')} color="action">
            {item.icon}
          </Icon>
        </Box>
      )}
      <ListItemText primary={<IntlMessages id={item.messageId} />} classes={{ primary: 'nav-item-text' }} />
      {item.count && (
        <Box sx={{ mr: 4.25 }}>
          <AppBadge count={item.count} color={item.color} />
        </Box>
      )}
    </ListItemButton>
  );
};

VerticalItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.any,
    auth: PropTypes.object,
    exact: PropTypes.bool,
    messageId: PropTypes.string,
    count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    url: PropTypes.string,
    color: PropTypes.string,
  }),
  level: PropTypes.number,
};

export default React.memo(VerticalItem);